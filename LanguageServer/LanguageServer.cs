//--// Type: CS Class //--//

/////////////////////////
//--// Shadow Corp //--//
//--//     2024    //--//
/////////////////////////


//--// System Dependencies //--//

using System.Diagnostics;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;

//--// External Dependencies //--//

using Newtonsoft.Json;
using WebSocketSharp;
using WebSocketSharp.Server;


//--// Required References //--//

//--// 1. System //--//
//--// 2. System.Net //--//
//--// 3. WebSocketSharp (Get From Nuget Package Manager) //--//
//--// 3. Newtonsoft (Get From Nuget Package Manager) //--//

//--// Main Code //--//

namespace Syn_Killer_Editor
{
    public class Dependencies
    {
        private const string Luau_Analyze = "https://github.com/223Win/LuauMonacoEditor/raw/main/LanguageServer/Dependencies/luau-analyze.exe";
        private const string Luau_Compile = "https://github.com/223Win/LuauMonacoEditor/raw/main/LanguageServer/Dependencies/luau-compile.exe";

        public void InstallDependencies()
        {
            using WebClient Client = new();
            if (File.Exists("LuauAnalyze.exe") == false)
            {
                Client.DownloadFile(Luau_Analyze, "LuauAnalyze.exe");
            }
            if (File.Exists("LuauCompile.exe") == false)
            {
                Client.DownloadFile(Luau_Compile, "LuauCompile.exe");
            }
        }
    }

    public class Luau
    {
        //--// Do not edit This class //--//

        //--// Type Checking / Linting //--//

        //--// Find more Info at https://luau-lang.org/lint //--//

        //--// Default: True //--//

        public struct LintingChecks
        {
            public bool UnknownGlobal { get; set; }
            public bool DeprecatedGlobal { get; set; }
            public bool GlobalUsedAsLocal { get; set; }
            public bool LocalShadow { get; set; }
            public bool SameLineStatement { get; set; }
            public bool MultiLineStatement { get; set; }
            public bool LocalUnused { get; set; }
            public bool FunctionUnused { get; set; }
            public bool ImportUnused { get; set; }
            public bool BuiltinGlobalWrite { get; set; }
            public bool PlaceholderRead { get; set; }
            public bool UnreachableCode { get; set; }
            public bool UnknownType { get; set; }
            public bool ForRange { get; set; }
            public bool UnbalancedAssignment { get; set; }
            public bool ImplicitReturn { get; set; }
            public bool DuplicateLocal { get; set; }
            public bool FormatString { get; set; }
            public bool TableLiteral { get; set; }
            public bool UninitializedLocal { get; set; }
            public bool DuplicateFunction { get; set; }
            public bool DeprecatedApi { get; set; }
            public bool TableOperations { get; set; }
            public bool DuplicateCondition { get; set; }
            public bool MisleadingAndOr { get; set; }
            public bool CommentDirective { get; set; }
            public bool IntegerParsing { get; set; }
            public bool ComparisonPrecedence { get; set; }
        }


        //--// Important Regex //--//

        private const string ErrorPosNameRegex = @"(.*:)";
        private const string ErrorPosRegex = @"(?<=\().*(?=\))";
        private const string ErrorNameRegex = @"(?<=:\s).*(?=\s?:)";
        private const string ErrorTextRegex = @"(?!.*:)\S+.*";
        private readonly Regex ErrorPosName = new(ErrorPosNameRegex);
        private readonly Regex ErrorPos = new(ErrorPosRegex);
        private readonly Regex ErrorName = new(ErrorNameRegex);
        private readonly Regex ErrorText = new(ErrorTextRegex);
        private readonly Regex NumberObtain = new(@"\d+");

        //--// Structures //--//

        public struct Position
        {
            public int Line { get; set; }
            public int Column { get; set; }
        }

        public struct ErrorData
        {
            public string ErrorName { get; set; }
            public string ErrorDescription { get; set; }
        }

        public struct AnalyzeData
        {
            public Position Position { get; set; }
            public ErrorData ErrorInfo { get; set; }
        }

        public struct CompletedErrorData
        {
            public AnalyzeData Data { get; set; }
            public string ErrorType { get; set; }
        }
        public LintingChecks CreateLintingChecks()
        {
            LintingChecks Lint = new()
            {
                //--// Set all Lint Values to default of "True" //--//

                UnknownGlobal = true,
                DeprecatedGlobal = true,
                GlobalUsedAsLocal = true,
                LocalShadow = true,
                SameLineStatement = true,
                MultiLineStatement = true,
                LocalUnused = true,
                FunctionUnused = true,
                ImportUnused = true,
                BuiltinGlobalWrite = true,
                PlaceholderRead = true,
                UnreachableCode = true,
                UnknownType = true,
                ForRange = true,
                UnbalancedAssignment = true,
                ImplicitReturn = true,
                DuplicateLocal = true,
                FormatString = true
            };
            Lint.FormatString = true;
            Lint.TableLiteral = true;
            Lint.UninitializedLocal = true;
            Lint.DuplicateFunction = true;
            Lint.DeprecatedApi = true;
            Lint.TableOperations = true;
            Lint.DuplicateCondition = true;
            Lint.MisleadingAndOr = true;
            Lint.CommentDirective = true;
            Lint.IntegerParsing = true;
            Lint.ComparisonPrecedence = true;

            return Lint;

        }

        private async Task<AnalyzeData?> AnalyzeResult(string Data)
        {
            if ((Data.Contains("AnalyzeSource.txt") || Data.Contains("GetErrorSource.txt")) == false)
            {
                return null;
            }
            MatchCollection PosAndName = ErrorPosName.Matches(Data);
            string DataForPosAndName = PosAndName[0].Value;
            string ErrorNameData = ErrorName.Matches(DataForPosAndName)[0].Value;
            string PosComasData = ErrorPos.Matches(DataForPosAndName)[0].Value;
            MatchCollection PositionDatas = NumberObtain.Matches(PosComasData);

            //--// Enough Data is created //--//

            //--// Creating Data Struct //--//

            AnalyzeData DATA = new();
            ErrorData EDATA = new();
            Position PDATA = new()
            {
                Line = int.Parse(PositionDatas[0].Value),
                Column = int.Parse(PositionDatas[1].Value)
            };
            EDATA.ErrorName = ErrorNameData;
            EDATA.ErrorDescription = ErrorText.Matches(Data)[0].Value;
            DATA.ErrorInfo = EDATA;
            DATA.Position = PDATA;

            return DATA;
        }

        public async Task<List<AnalyzeData?>> GetErrors(string Source)
        {
            Dependencies dependencies = new();

            await Task.Run(() => dependencies.InstallDependencies());

            List<AnalyzeData?> CoreResult = new();

            string filepath = "GetErrorSource.txt";
            byte[] converted = Encoding.UTF8.GetBytes(Source);
            File.WriteAllBytes(filepath, converted);

            string command = "LuauCompile.exe";
            ProcessStartInfo PInfo = new()
            {
                FileName = command,
                Arguments = filepath,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true,
                WorkingDirectory = Environment.CurrentDirectory,
            };

            using (Process process = new())
            {
                process.StartInfo = PInfo;

                process.OutputDataReceived += (sender, e) =>
                {
                    if (e.Data == null)
                    {
                        return;
                    }


                    CoreResult.Add(AnalyzeResult(e.Data).Result);
                };

                process.ErrorDataReceived += (sender, e) =>
                {
                    if (e.Data == null)
                    {
                        return;
                    }


                    CoreResult.Add(AnalyzeResult(e.Data).Result);
                };

                _ = process.Start();
                process.BeginOutputReadLine();
                process.BeginErrorReadLine();

                process.WaitForExit();
            }

            return CoreResult;
        }

        public async Task<List<AnalyzeData?>> AnalyzeSource(string Source)
        {
            Dependencies dependencies = new();

            await Task.Run(() => dependencies.InstallDependencies());

            List<AnalyzeData?> CoreResult = new();

            string filePath = "AnalyzeSource.txt";
            byte[] converted = Encoding.UTF8.GetBytes(Source);
            File.WriteAllBytes(filePath, converted);

            string command = $"LuauAnalyze.exe";
            ProcessStartInfo PInfo = new()
            {
                FileName = command,
                Arguments = filePath,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true,
                WorkingDirectory = Environment.CurrentDirectory,
            };

            using (Process process = new())
            {
                process.StartInfo = PInfo;

                process.OutputDataReceived += (sender, e) =>
                {
                    if (e.Data == null)
                    {
                        return;
                    }


                    CoreResult.Add(AnalyzeResult(e.Data).Result);
                };

                process.ErrorDataReceived += (sender, e) =>
                {
                    if (e.Data == null)
                    {
                        return;
                    }


                    CoreResult.Add(AnalyzeResult(e.Data).Result);
                };
                _ = process.Start();
                process.BeginOutputReadLine();
                process.BeginErrorReadLine();

                process.WaitForExit();

            }

            return CoreResult;
        }

        public async Task<List<CompletedErrorData>> GetFullIDEInfo(string SourceCode)
        {

            List<CompletedErrorData> IDEData = new();

            List<AnalyzeData?> ErrorInfo = await GetErrors(SourceCode);
            List<AnalyzeData?> WarningInfo = await AnalyzeSource(SourceCode);

            foreach (AnalyzeData Error in ErrorInfo)
            {
                CompletedErrorData Data = new()
                {
                    Data = Error,
                    ErrorType = "Error"
                };

                IDEData.Add(Data);
            }

            foreach (AnalyzeData Warning in WarningInfo)
            {
                bool ShouldSkip = false;
                foreach (CompletedErrorData EData in IDEData)
                {
                    if (EData.Data.Equals(Warning) == true)
                    {
                        ShouldSkip = true;
                        continue;
                    }
                }
                if (ShouldSkip == true)
                {
                    continue;
                }
                CompletedErrorData Data = new()
                {
                    Data = Warning,
                    ErrorType = "Warning"
                };
                IDEData.Add(Data);

            }

            return IDEData;
        }

    }

    public class LanguageServer
    {
        //--// Just need to call one function //--//
        //--// We set the rest up for you. //--// 
        //--// Besides the Url Part //--//
        //--// Put the same Url here as you did in the ServerConnect.js Code //--//

        //--// Do not touch Luau Class //--//

        internal static Luau LUAU = new();

        internal class LanguageServerSocket : WebSocketBehavior
        {
            protected override void OnMessage(MessageEventArgs Content)
            {
                try
                {
                    string SourceCode = Content.Data;
                    List<Luau.CompletedErrorData> Data = LUAU.GetFullIDEInfo(SourceCode).Result;

                    if (Data != null)
                    {
                        Send(JsonConvert.SerializeObject(Data));
                    }
                    else
                    {
                        Send("No Errors");
                    }

                }
                catch
                {
                    Send("No Errors");
                }
            }
        }
        public void StartLanguageServer(string URL)
        {
            WebSocketServer Server = new(URL);
            Server.AddWebSocketService<LanguageServerSocket>("/");
            Server.ReuseAddress = true;
            Server.Start();
        }
    }
}
