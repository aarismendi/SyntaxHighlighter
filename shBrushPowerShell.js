/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.1.364 (October 15 2009)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/copyleft/lesser.html>.
 */
SyntaxHighlighter.brushes.PowerShell = function()
{	
	var opera = '-bor -bxor -ccontains -ceq -cge -cgt -cle -clike ' +
				'-clt -cmatch -cne -cnotcontains -cnotlike -cnotmatch -contains -creplace ' +
				'-csplit -eq -f -ge -gt -icontains -ieq -ige ' +
				'-igt -ile -ilike -ilt -imatch -ine -inotcontains -inotlike ' +
				'-inotmatch -ireplace -is -isnot -isplit -join -le -like ' +
				'-lt -match -ne -not -notcontains -notlike -notmatch -or ' +
				'-replace -split -xor';
	var keywords =  'begin function for foreach return else trap while ' +
					'using do data dynamicparam class define until end ' +
					'break if throw param continue finally in switch ' +
					'exit filter from try process var catch';
	var cmdlet = 'Add-Content|Add-History|Add-Member|Add-PSSnapin|Add-Type|Clear(-Content)?|Clear-Item|' +
				'Clear-ItemProperty|Clear-Variable|Compare-Object|ConvertFrom-SecureString|Convert-Path|' +
				'ConvertTo-Html|ConvertTo-SecureString|Copy(-Item)?|Copy-ItemProperty|Export-Alias|' +
				'Export-Clixml|Export-Console|Export-Csv|ForEach(-Object)?|Format-Custom|Format-List|' +
				'Format-Table|Format-Wide|Get-Acl|Get-Alias|Get-AuthenticodeSignature|Get-ChildItem|Get-Command|' +
				'Get-Content|Get-Credential|Get-Culture|Get-Date|Get-EventLog|Get-ExecutionPolicy|' +
				'Get-Help|Get-History|Get-Host|Get-Item|Get-ItemProperty|Get-Location|Get-Member|' +
				'Get-PfxCertificate|Get-Process|Get-PSDrive|Get-PSProvider|Get-PSSnapin|Get-Service|' +
				'Get-TraceSource|Get-UICulture|Get-Unique|Get-Variable|Get-WmiObject|Group-Object|' +
				'Import-Alias|Import-Clixml|Import-Csv|Invoke-Expression|Invoke-History|Invoke-Item|' +
				'Join-Path|Measure-Command|Measure-Object|Move(-Item)?|Move-ItemProperty|New-Alias|' +
				'New-Item|New-ItemProperty|New-Object|New-PSDrive|New-Service|New-TimeSpan|' +
				'New-Variable|Out-Default|Out-File|Out-Host|Out-Null|Out-Printer|Out-String|Pop-Location|' +
				'Push-Location|Read-Host|Remove-Item|Remove-ItemProperty|Remove-PSDrive|Remove-PSSnapin|' +
				'Remove-Variable|Rename-Item|Rename-ItemProperty|Resolve-Path|Restart-Service|Resume-Service|' +
				'Select-Object|Select-String|Set-Acl|Set-Alias|Set-AuthenticodeSignature|Set-Content|' +
				'Set-Date|Set-ExecutionPolicy|Set-Item|Set-ItemProperty|Set-Location|Set-PSDebug|' +
				'Set-Service|Set-TraceSource|Set(-Variable)?|Sort-Object|Split-Path|Start-Service|' +
				'Start-Sleep|Start-Transcript|Stop-Process|Stop-Service|Stop-Transcript|Suspend-Service|' +
				'Tee-Object|Test-Path|Trace-Command|Update-FormatData|Update-TypeData|Where(-Object)?|' +
				'Write-Debug|Write-Error|Write(-Host)?|Write-Output|Write-Progress|Write-Verbose|Write-Warning';
	var alias = 'ac asnp clc cli clp clv cpi cpp cvpa diff epal epcsv fc fl ' +
				'ft fw gal gc gci gcm gdr ghy gi gl gm gp gps group gsv ' +
				'gsnp gu gv gwmi iex ihy ii ipal ipcsv mi mp nal ndr ni nv oh rdr ' +
				'ri rni rnp rp rsnp rv rvpa sal sasv sc select si sl sleep sort sp ' +
				'spps spsv sv tee cat cd cp h history kill lp ls ' +
				'mount mv popd ps pushd pwd r rm rmdir echo cls chdir del dir ' +
				'erase rd ren type % \\?';

	this.regexList = [
		{ regex: new RegExp('\\$(?:(?:global|script|private|env):)?[A-Z0-9_]+', 'gi'), css: 'variable'  },  // variables $Computer1
		{ regex: / -[a-zA-Z][a-zA-Z]+ /g,                       css: 'param'      },  // Param and operators.
		{ regex: new RegExp(this.getKeywords(opera), 'gmi'),    css: 'opera'      },
		{ regex: /#.*$/gm,                                      css: 'comments'   },  // one line comments
		{ regex: /<#.*\n[\s\S]*\n.*#>/gm,                       css: 'comments'   },  // block comments (Doesn't work)
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string'     },  // strings
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,	css: 'string'     },  // strings
		{ regex: new RegExp('@"\\n[\\s\\S]*?\\n"@', 'gm'),      css: 'string'     },  // Double Quoted Here string 
		{ regex: new RegExp("@'\\n[\\s\\S]*?\\n'@", 'gm'),      css: 'string'     },  // Single Quoted Here string 
		{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),	css: 'keyword'    },
		{ regex: new RegExp(this.getKeywords(cmdlet), 'gmi'),   css: 'cmdlet'     },
		{ regex: new RegExp(this.getKeywords(alias), 'gmi'),    css: 'cmdlet'     },
		{ regex: /\b[a-zA-Z][\w]+-[\w]+\b/g,                    css: 'functions'  },
		{ regex: /\[[a-zA-Z][\w\.]+\]/g,                        css: 'dotnettype' },  // .NET Type [System.Net.IPAddress]
		{ regex: /\[\w+\([\w ="',$\[\]\.]*\)\]/g,               css: 'paramattrib'}   // Parameter Attributes [parameter(Mandatory=$true)]
	];
};

SyntaxHighlighter.brushes.PowerShell.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.PowerShell.aliases = ['powershell', 'ps'];
