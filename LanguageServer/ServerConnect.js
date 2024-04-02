//--// LanguageServerConnecter.js //--//
//--// LanguageServerLuau.js //--//
//--// Shadow Corp 2024 //--//

//--// Language Server Must have Requires Below //--//


const Requires = [
    "luau-analyze.exe",
    "luau-compile.exe",
]

class LanguageServerConnecter {
    constructor(ServerUrl) {
        this.ServerUrl = ServerUrl;
    }
    
    GetLuauErrors(Content)
    {
        var LuauErrors = "NAN";
        const ServerSocket = new WebSocket(this.ServerUrl);
        return new Promise(resolve => {
            ServerSocket.onmessage = function (event) {
                LuauErrors = event.data;
                resolve(LuauErrors);
            }

            ServerSocket.send(Content);
        })
    }
}
