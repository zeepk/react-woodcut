import React, { Component } from 'react';
import FetchStats from './Rs3FetchStats';
import FetchMinigames from './Rs3FetchMinigames';
import FetchActivityLog from './Rs3FetchActivityLog';
import FetchUserData from './Rs3FetchUserData';
import Img from 'react-image';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nameform from '../NameForm';

export default class parent_fetcher extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.match.params.id,
			data: {},
			log: {},
			user_data: ' '
		};
		this.render = this.render.bind(this);
		this.username = this.state.user.replace(' ', '+');
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	nameWithPluses() {
		var username = this.state.user.replace(' ', '+');
		username = username.replace('_', '+');
		return username;
	}

	nameWithSpaces() {
		if (!this.props.match) {
			return;
		}
		var username = this.props.match.params.id.replace('+', ' ');
		username = username.replace('_', ' ');
		return username;
	}

	componentDidMount() {
		// console.log("running fetch");
		const proxyurl = 'https://cors-anywhere.herokuapp.com/';
		var player_name = ' ';

		player_name = this.props.match.params.id;

		player_name = player_name.toString();
		player_name = player_name.replace(' ', '+');
		player_name = player_name.replace('_', '+');
		console.log(player_name);
		fetch(
			proxyurl +
				'https://secure.runescape.com/m=hiscore/index_lite.ws?player=' +
				player_name
		)
			.then(res => res.text())
			// .then(res => this.setState({data: res}))
			.then(
				result => {
					// console.log('got data: ' + result);

					this.setState({ data: result, user_data: result });
				},

				error => {
					console.log('ERROR changing state');
				}
			)
			.then(function(info) {
				return fetch(
					proxyurl +
						'https://apps.runescape.com/runemetrics/profile/profile?user=' +
						player_name +
						'&activities=20'
				);
			})
			.then(res => res.json())
			// .then(res => this.setState({log: res}))
			.then(
				result => {
					this.setState({ log: result });
				},

				error => {
					console.log('profile private');
				}
			);
	}
	render() {
		var data_array = [
			'Overall',
			'Attack',
			'Defence',
			'Strength',
			'Constitution',
			'Ranged',
			'Prayer',
			'Magic',
			'Cooking',
			'Woodcutting',
			'Fletching',
			'Fishing',
			'Firemaking',
			'Crafting',
			'Smithing',
			'Mining',
			'Herblore',
			'Agility',
			'Thieving',
			'Slayer',
			'Farming',
			'Runecrafting',
			'Hunter',
			'Construction',
			'Summoning',
			'Dungeoneering',
			'Divination',
			'Invention',
			'Archaeology',
			'Bounty Hunter',
			'BH: Rogue',
			'Dominion Tower',
			'The Crucible',
			'Castle Wars',
			'BA: Attacker',
			'BA: Defender',
			'BA: Collector',
			'BA: Healer',
			'Duel Tournament',
			'Mobilizing Armies',
			'Conquest',
			'Fist of Guthix',
			'GG: Resource Race',
			'GG: Athletics',
			'WE2: Armadyl Lifetime',
			'WE2: Bandos Lifetime',
			'WE2: Armadyl PvP Kills',
			'WE2: Bandos PvP Kills',
			'Heist Guard Level',
			'Heist Robber Level',
			'CFP 5 Game Average',
			'UNK',
			'UNK',
			'Runescore',
			'Easy Clues',
			'Medium Clues',
			'Hard Clues',
			'Elite Clues',
			'Master Clues'
		];

		var skills = [];
		var minigames = [];
		var activities = [];
		var dates = [];
		var data = [];

		function ogranize_user_data(dict) {
			try {
				var temp_data_array = dict.split('\n');
				var individual_skill_array = temp_data_array[2].split(',');
			} catch (error) {
				var empty_activities = {};
				for (var i = 0; i < 28; i++) {
					empty_activities[i] = ' ';
				}
				return empty_activities;
			}
			// dict = JSON.stringify(data);
			// var temp_data_array = dict.split("\n");
			// var temp_data_array = dict;
			individual_skill_array = temp_data_array[53].split(',');
			var individual_data = individual_skill_array[1];
			individual_data = parseInt(individual_data, 10);
			data[0] = individual_data;
			individual_data = individual_skill_array[0];
			data[1] = individual_data;
			individual_skill_array = temp_data_array[0].split(',');
			var another_individual_data = individual_skill_array[2];
			another_individual_data = parseInt(another_individual_data, 10);
			another_individual_data = another_individual_data.toLocaleString();
			data[2] = another_individual_data;
			individual_data = individual_skill_array[0];
			data[3] = individual_data;
		}
		function remove_negatives(neg) {
			if (neg < 0 || neg === '-1') {
				neg = 0;
			}
			return neg;
		}

		function calculate_virtual_level(name, level, xp) {
			if (xp < 14391160 || name === 'Overall') {
				return level;
			} else if (xp >= 104273167) {
				return 120;
			} else if (xp >= 94442737) {
				return 119;
			} else if (xp >= 85539082) {
				return 118;
			} else if (xp >= 77474828) {
				return 117;
			} else if (xp >= 70170840) {
				return 116;
			} else if (xp >= 63555443) {
				return 115;
			} else if (xp >= 57563718) {
				return 114;
			} else if (xp >= 52136869) {
				return 113;
			} else if (xp >= 47221641) {
				return 112;
			} else if (xp >= 42769801) {
				return 111;
			} else if (xp >= 38737661) {
				return 110;
			} else if (xp >= 35085654) {
				return 109;
			} else if (xp >= 31777943) {
				return 108;
			} else if (xp >= 28782069) {
				return 107;
			} else if (xp >= 26068632) {
				return 106;
			} else if (xp >= 23611006) {
				return 105;
			} else if (xp >= 21385073) {
				return 104;
			} else if (xp >= 19368992) {
				return 103;
			} else if (xp >= 17542976) {
				return 102;
			} else if (xp >= 15889109) {
				return 101;
			} else if (xp >= 14391160) {
				return 100;
			} else {
				console.log('Error calculating virtual level.');
				return 0;
			}
		}

		function organize_data(dict, data_array) {
			try {
				var temp_data_array = dict.split('\n');
				var individual_skill_array = temp_data_array[5].split(',');
			} catch (error) {
				console.log('Empty organize_data');
				var empty_activities = {};
				for (var i = 0; i < 28; i++) {
					empty_activities[i] = ' ';
				}
				return empty_activities;
			}
			temp_data_array = dict.split('\n');

			for (i = 0; i < 29; i++) {
				individual_skill_array = temp_data_array[i].split(',');
				individual_skill_array[1] = remove_negatives(individual_skill_array[1]);
				individual_skill_array[2] = remove_negatives(individual_skill_array[2]);
				var xp = individual_skill_array[2];
				xp = parseInt(xp, 10);
				if (individual_skill_array[0] === '-1') {
					individual_skill_array[0] = 'Not Ranked';
				}
				skills[i] = {
					id: i,
					name: data_array[i],
					rank: individual_skill_array[0],
					level: individual_skill_array[1],
					//TODO: add virtual leveling for normal and elite skills
					virtual: calculate_virtual_level(
						data_array[i],
						individual_skill_array[1],
						xp
					),
					xp: xp.toLocaleString('en')
				};
			}
			for (i = 29; i < 58; i++) {
				individual_skill_array = temp_data_array[i].split(',');
				var score = individual_skill_array[1];
				if (individual_skill_array[0] === '-1') {
					individual_skill_array[0] = 'Not Ranked';
				}

				if (score === '-1') {
					score = ' ';
				} else {
					score = parseInt(score, 10);
					score = score.toLocaleString('en');
				}
				minigames[i] = {
					id: i,
					name: data_array[i],
					rank: individual_skill_array[0],
					score: score
				};
			}
		}

		function get_dates(dict) {
			try {
				/* eslint-disable no-unused-vars */
				var act_text = dict['activities'][11]['text'];
				/* eslint-enable no-unused-vars */
			} catch (error) {
				var empty_activities = {};
				for (var i = 0; i < 20; i++) {
					empty_activities[i] = ' ';
				}

				return empty_activities;
			}
			for (var j = 0; j < 20; j++) {
				var act_date = dict['activities'][j]['date'];
				dates[j] = act_date;
			}
		}

		function organize_log_data(dict) {
			try {
				// var test = dict;
			} catch (error) {
				console.log('error log');
				// empty_activities[0] = "Player's RuneMetrics profile is set to private. No activity will be displayed.";
				// for (var i = 1; i < 20; i++) {
				//   empty_activities[i] = " ";
				// }
				// activities = empty_activities;
				return;
			}
			if (!dict['activities']) {
				if (dict['error'] === 'PROFILE_PRIVATE') {
					activities[0] =
						"Player's RuneMetrics profile is set to private. No activity will be displayed.";
					for (var i = 1; i < 20; i++) {
						activities[i] = ' ';
					}
				}
			} else {
				var act_text;
				for (var j = 0; j < 20; j++) {
					act_text = dict['activities'][j]['text'];
					var xp_index = act_text.indexOf('XP');
					if (xp_index > 0) {
						var sub_1 = act_text.substring(0, xp_index - 6);
						var sub_2 = act_text.substring(xp_index + 2, act_text.length);
						act_text = sub_1 + 'm XP' + sub_2;
					}
					activities[j] = act_text;
				}
			}
		}

		// fetch_rs3_data();

		organize_data(this.state.data, data_array);
		ogranize_user_data(this.state.user_data);
		organize_log_data(this.state.log);
		get_dates(this.state.log);

		// if (!skills[1] || !activities[0]){
		// // if (false){

		//   return(
		//     <div>
		//       <Nameform version='rs3'/>
		//       <div className="grid-container">
		//       <div className="grid-item" ></div>
		//       <div className="grid-item" ><img id="loading" src={require('../loading.gif')} alt="Site Logo" /></div>
		//       <div className="grid-item" ></div>
		//       </div>

		//     </div>
		//   )
		// }
		// else{
		return (
			<div>
				<Nameform version="rs3" />

				{/* <!-- GRID --> */}

				<div className="grid-container">
					{/* stat table */}
					<div className="grid-item" id="stat-table">
						{/* stat table component goes here */}
						<br />
						<br />
						<FetchStats stats_array={skills} />
					</div>
					<div className="grid-item" id="player-info">
						<div>
							{/* avatar image */}
							<Img
								src={
									'http://secure.runescape.com/m=avatar-rs/' +
									this.nameWithPluses() +
									'/chat.png'
								}
							/>
						</div>
						<div>
							{/* username */}

							<h1 id="username">{this.nameWithSpaces()}</h1>
						</div>
						{/* player grid */}

						{/* user info component goes here */}
						<FetchUserData user_data={data} />
					</div>
					{/* activity table component goes here */}
					<div className="grid-item" id="align-right">
						<Tabs defaultActiveKey="activity" id="uncontrolled-tab-example">
							<Tab eventKey="activity" title="Activity">
								<FetchActivityLog activities={activities} dates={dates} />
							</Tab>
							<Tab eventKey="minigames" title="Minigame Stats">
								<FetchMinigames minigame_data={minigames} />
							</Tab>
						</Tabs>
					</div>
				</div>
			</div>
		);
	}
}
