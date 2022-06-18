//Used to change shorthand languages into their longer version
code_translation_dic = { //5 on each line
  'as':"ActionScript",'asc':"AngelScript",'apacheconf':"Apache config",'osascript':"AppleScript",'adoc':"AsciiDoc",
  'ahk':"AutoHotkey",'sh':"Bash",'zsh':"Bash",'bat':"Batch file (DOS)",'cmd':"Batch file (DOS)",
  'bf':"Brainfuck",'h':"C",'cs':"C#",'c#':"C#",'cc':"C++",'c++':"C++",
  'h++':"C++",'hpp':"C++",'hh':"C++",'hxx':"C++",'cxx':"C++",
  'capnp':"Cap’n Proto",'cls':"Caché Object Script",'icl':"Clean",'dcl':"Clean",'clj':"Clojure",
  'cmake.in':"CMake",'coffee':"CoffeeScript",'cson':"CoffeeScript",'iced':"CoffeeScript",'crm':"crmsh",
  'pcmk':"crmsh",'cr':"Crystal",'dpr':"Delphi",'dfm':"Delphi",'pas':"Delphi",
  'pascal':"Delphi",'freepascal':"Delphi",'lazarus':"Delphi",'lpr':"Delphi",'lfm':"Delphi",
  'patch':"Diff",'jinja':"Django",'bind':"DNS Zone",'zone':"DNS Zone",'docker':"Dockerfile",
  'dst':"Dust",'erl':"Erlang",'xlsx':"Excel formulae",'xls':"Excel formulae",'fs':"F#",
  'f90':"Fortran",'f95':"Fortran",'nc':"G-code (ISO 6983)",'gms':"GAMS",'gss':"GAUSS",
  'feature':"Gherkin",'golang':"Go",'hbs':"Handlebars",'html.hbs':"Handlebars",'html.handlebars':"Handlebars",
  'htmlbars':"Handlebars",'hs':"Haskell",'hx':"Haxe",'html':"HTML, XML",'xhtml':"HTML, XML",
  'rss':"HTML, XML",'atom':"HTML, XML",'xjb':"HTML, XML",'xsd':"HTML, XML",'xsl':"HTML, XML",
  'plist':"HTML, XML",'wsf':"HTML, XML",'svg':"HTML, XML",'https':"HTTP",'hylang':"Hy",
  'i7':"Inform 7",'jsp':"Java",'js':"Javascript",'jsx':"Javascript",'mjs':"Javascript",
  'cjs':"Javascript",'wildfly-cli':"JBoss CLI",'kt':"Kotlin",'kts':"Kotlin",'ls':"Lasso",
  'lassoscript':"Lasso",'tex':"LaTeX",'ls':"LiveScript",'mk':"Makefile",'mak':"Makefile",
  'make':"Makefile",'md':"Markdown",'mkdown':"Markdown",'mkd':"Markdown",'mma':"Mathematica",
  'wl':"Mathematica",'m':"Mercury",'moo':"Mercury",'mikrotik':"Microtik RouterOS script",'mips':"MIPS Assembly",
  'moon':"MoonScript",'nginxconf':"Nginx config",'nixos':"Nix",'mm':"Objective-C",'objc':"Objective-C",
  'obj-c':"Objective-C",'obj-c++':"Objective-C",'objective-c++':"Objective-C",'ml':"OCaml",'scad':"OpenSCAD",
  'pf.conf':"Packet Filter config",'pl':"Perl",'pm':"Perl",'text':"Plain text",'txt':"Plain text",
  'postgres':"PostgreSQL",'postgresql':"PostgreSQL",'ps':"PowerShell",'ps1':"PowerShell",'pp':"Puppet",
  'pb':"PureBASIC",'pbi':"PureBASIC",'py':"Python",'gyp':"Python",'ipython':"Python",
  'k':"Q",'kdb':"Q",'qt':"QML",'re':"ReasonML",'graph':"Roboconf",
  'instances':"Roboconf",'rb':"Ruby",'gemspec':"Ruby",'podspec':"Ruby",'thor':"Ruby",
  'irb':"Ruby",'rs':"Rust",'sci':"Scilab",'console':"Shell Session",'st':"Smalltalk",
  'ml':"SML (Standard ML)",'mysql':"SQL (more)",'oracle':"SQL (more)",'stanfuncs':"Stan",
  'do':"Stata",'ado':"Stata",'p21':"STEP Part 21",'step':"STEP Part 21",'stp':"STEP Part 21",
  'styl':"Stylus",'tk':"Tcl",'toml':"TOML,also INI",'craftcms':"Twig",'ts':"TypeScript",
  'tsx':"TypeScript",'vbs':"VBScript",'v':"Verilog",'sv':"Verilog",'svh':"Verilog",
  'vb':"Visual Basic .NET",'x++':"X++",'tao':"XL",'xpath':"XQuery",'xq':"XQuery",
  'zep':"Zephir"
}
 
function refreshData()
{
    x = 1;  // 5 Seconds
    let code_blocks = document.getElementsByTagName("code");
    for(var i = 0; i < code_blocks.length; i++){
        var code_type = document.getElementsByTagName("code")[0].className.split(" ").splice(-1,1);
      
        var code_type_changed = code_type in code_translation_dic ? code_translation_dic[code_type] : code_type; // Get long name for code || js -> javascript, py -> python, cs -> c-sharp. ect
      
        if (!code_blocks[i].innerHTML.includes("<hr")){
          lines = code_blocks[i].innerHTML.split("\n");
          new_lines = []

          for (var p = 0; p < lines.length; p++) {
            var line_num = `${p+1}`.padEnd(String(lines.length).length);
            new_lines.push(`<span style="color: #6E6F77; padding-right: 10px">${line_num}</span><span style="padding-right: 10px; border-left: 2px solid #202225;"></span>${lines[p]}`)
          }

          code_blocks[i].innerHTML = new_lines.join("\n");

          if (code_type == ""){
            //The code block has no formatting
            code_blocks[i].innerHTML = `<span>No Formatting</span><hr style="border-radius: 5px; margin: 4px; border: 1px solid #202225">` + code_blocks[i].innerHTML;
          } else {
            if (code_type_changed == code_type) {
              //The code block is not using shorthand
              code_blocks[i].innerHTML = `<span>code:</span> <span style=\"color: rgb(60, 200, 250);\">${code_type_changed}</span><hr style="border-radius: 5px; margin: 4px; border: 1px solid #202225">` + code_blocks[i].innerHTML;
            } else {
              //The codeblock is using shorthand
              code_blocks[i].innerHTML = `<span>code:</span> <span style=\"color: rgb(60, 200, 250);\">${code_type_changed}</span> (${code_type})<hr style="border-radius: 5px; margin: 4px; border: 1px solid #202225">` + code_blocks[i].innerHTML;
            }
          }
        }
    }
 
    setTimeout(refreshData, x*1000);
}
refreshData(); // execute function
