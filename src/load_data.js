import React from 'react'

export default function load_data() {
      // populate()           
//   
    var player_name = "zee_pk"

    console.log(player_name)
    
  

    async function getUsers() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const response = await fetch(proxyurl + 'https://secure.runescape.com/m=hiscore/index_lite.ws?player=' + player_name);
        const users = await response.text();
        console.log(users);      
      }
    getUsers()

  
    return (
        <div>
            <table>
                <tbody>

                <tr>
                    <td>
                        <h1>testing inside component</h1>
                    </td>
                    <td>
                        <h1>{player_name}</h1>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
