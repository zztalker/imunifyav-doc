(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{366:function(a,t,s){"use strict";s.r(t);var e=s(34),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"config-file-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-file-description","aria-hidden":"true"}},[a._v("#")]),a._v(" Config File Description")]),a._v(" "),s("p",[a._v("ImunifyAV(+) config file is available on the following location after installation:")]),a._v(" "),s("p",[s("em",[a._v("/etc/sysconfig/imunify360/imunify360.config")])]),a._v(" "),s("p",[a._v("In the config file it is possible to set up ImunifyAV(+) configuration. The following options are available:")]),a._v(" "),s("table",[s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[a._v("MALWARE_SCANNING:")])])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("max_signature_size_to_scan: 1048576")])]),a._v(" "),s("td",[a._v("# max file size to scan in the standard mode; value is set in bytes")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("max_cloudscan_size_to_scan: 10485760")])]),a._v(" "),s("td",[a._v("# max file size to scan in the cloud-assisted (by hashes) mode; value is set in bytes")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("max_mrs_upload_file: 10485760")])]),a._v(" "),s("td",[a._v("# max file size to upload to CloudLinux malware research service; value is set in bytes")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("detect_elf: False")])]),a._v(" "),s("td",[a._v("# enable ("),s("span",{staticClass:"notranslate"},[a._v("True")]),a._v(") or disable ("),s("span",{staticClass:"notranslate"},[a._v("False")]),a._v(") (default value) binary (ELF) malware detection")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("sends_file_for_analysis: True")])]),a._v(" "),s("td",[a._v("# send ("),s("span",{staticClass:"notranslate"},[a._v("True")]),a._v(") (default value) or not ("),s("span",{staticClass:"notranslate"},[a._v("False")]),a._v(") malicious and suspicious files to the Imunify team for analysis")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("cloud_assisted_scan: True")])]),a._v(" "),s("td",[a._v("# speed up scans by check file hashes using cloud database")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("rapid_scan: True")])]),a._v(" "),s("td",[a._v("# speeds up ("),s("span",{staticClass:"notranslate"},[a._v("True")]),a._v(") (default value) ot not ("),s("span",{staticClass:"notranslate"},[a._v("False")]),a._v(") repeated scans based on smart re-scan approach, local result caching and cloud-assisted scan.")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("rapid_scan_rescan_unchanging_files_frequency: null")])]),a._v(" "),s("td",[a._v('# defines what part of all files will be rescanned during each scan. For example, if set 10 then 1/10 part of all files will be rescanned. The default value `null` - means "choose frequency based on scan schedule". E.g. month - 1, week - 5, day - 10.')])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("hyperscan: True")])]),a._v(" "),s("td",[a._v("# allows to use (True) the regex matching Hyperscan library in Malware Scanner to greatly improve the scanning speed. True is the default value. Hyperscan requires its own signatures set that will be downloaded from the files.imunify360.com and compiled locally."),s("br"),s("b",[a._v("Platform requirements")]),a._v(":"),s("br"),a._v("* Hyperscan supports Debian, Ubuntu and CentOS/CloudLinux 7 and later."),s("br"),a._v("* SSE3 processor instructions support. It is quite common nowadays, but may be lacking in virtual environments or in some rather old servers.")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("crontabs: False")])]),a._v(" "),s("td",[a._v("# enable ("),s("span",{staticClass:"notranslate"},[a._v("True")]),a._v(") scan of the system and user crontab files for malicious jobs. The default value is "),s("span",{staticClass:"notranslate"},[a._v("False")]),a._v(".")])]),a._v(" "),s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[a._v("ERROR_REPORTING:")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("enable: True")])]),a._v(" "),s("td",[a._v("# automatically report errors to the Imunify team")])]),a._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[a._v("MALWARE_SCAN_INTENSITY:")])])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("cpu: 2")])]),a._v(" "),s("td",[a._v("# intensity level for CPU consumption. Can be set from 1 to 7, default is 2")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("io: 2")])]),a._v(" "),s("td",[a._v("# intensity level for file operations. Can be set from 1 to 7, default is 2")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("ram: 2048")])]),a._v(" "),s("td",[a._v("# intensity level for RAM consumption. Minimum value is 1024, default is 2048")])]),a._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[a._v("MALWARE_SCAN_SCHEDULE:")])])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("day_of_month: <next day after installation>")])]),a._v(" "),s("td",[a._v("# when the background scan shall start, day of the month. Can be from 1 to 31, the default value is the <next day after installation>.")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("day_of_week: 0")])]),a._v(" "),s("td",[a._v("# when the background scan shall start, day of the week. Can be from 0 to 7 (0 for Sunday, 1 for Monday..., 7 for Sunday (again)), the default value is 0")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("hour: 3")])]),a._v(" "),s("td",[a._v("# when the background scan shall start, hour. Can be from 0 to 23, the default value is 3")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("interval: MONTH")])]),a._v(" "),s("td",[a._v("# interval of scan. Supported values: strings "),s("span",{staticClass:"notranslate"},[a._v("`NONE`")]),a._v(" (no scan), "),s("span",{staticClass:"notranslate"},[a._v("`DAY`")]),a._v(", "),s("span",{staticClass:"notranslate"},[a._v("`WEEK`")]),a._v(", "),s("span",{staticClass:"notranslate"},[a._v("`MONTH`")]),a._v(", the default value is "),s("span",{staticClass:"notranslate"},[a._v("`MONTH`")])])]),a._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[a._v("MALWARE_CLEANUP:")])])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("trim_file_instead_of_removal: True")])]),a._v(" "),s("td",[a._v("# do not remove infected file during cleanup but make the file zero-size (for malwares like web-shells) ("),s("span",{staticClass:"notranslate"},[a._v("True")]),a._v(") (default value)")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("keep_original_files_days: 14")])]),a._v(" "),s("td",[a._v("# the original infected file is available for restore within the defined period. The default is 14 days. The minimum value is one day.")])]),a._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[a._v("ADMIN_CONTACTS:")])])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("emails: youremail@email.com")])]),a._v(" "),s("td",[a._v("# your email to receive reports about critical issues, security alerts or system misconfigurations detected on your servers.")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("enable_icontact_notifications: True")])]),a._v(" "),s("td",[a._v("# receive notifications about malicious activity detected (no more than once in 24h) and when malware scan was not performed for not more than once per week (once a week). Available for cPanel and cPanel-supported OSes. Default value is True.")])]),a._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[a._v("PERMISSIONS:")])])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("support_form: True")])]),a._v(" "),s("td",[a._v("# show ("),s("span",{staticClass:"notranslate"},[a._v("True")]),a._v(") (the default value) or hide ("),s("span",{staticClass:"notranslate"},[a._v("False")]),a._v(") the Support icon in the ImunifyAV(+) UI.")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("user_ignore_list: True")])]),a._v(" "),s("td",[a._v("# show ("),s("span",{staticClass:"notranslate"},[a._v("True")]),a._v(") (the default value) or hide ("),s("span",{staticClass:"notranslate"},[a._v("False")]),a._v(") the Ignore List tab for end-users in the ImunifyAV(+) UI.")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("allow_malware_scan: False")])]),a._v(" "),s("td",[a._v("# enable ("),s("span",{staticClass:"notranslate"},[a._v("True")]),a._v(") or disable ("),s("span",{staticClass:"notranslate"},[a._v("False")]),a._v(") (the default value) “scan” action in the UI of the end-user.")])]),a._v(" "),s("tr",[s("td",{attrs:{width:"250px;"}},[s("span",{staticClass:"notranslate"},[a._v("upgrade_button: True")])]),s("td",[a._v("# enable ("),s("span",{staticClass:"notranslate"},[a._v("True")]),a._v(" - the default value) or disable ("),s("span",{staticClass:"notranslate"},[a._v("False")]),a._v(") the Imunify upgrade button.")])]),a._v(" "),s("tr",[s("th",{attrs:{colspan:"2",align:"left"}},[s("span",{staticClass:"notranslate"},[a._v("RESOURCE_MANAGEMENT:")])])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("ram_limit: 500")])]),a._v(" "),s("td",[a._v("# set RAM consumption limit for ImunifyAV(+) in MB")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("io_limit: 2")])]),a._v(" "),s("td",[a._v("# set IO consumption limit for ImunifyAV(+) in MB")])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[a._v("cpu_limit: 2")])]),a._v(" "),s("td",[a._v("# set CPU consumption limit for ImunifyAV(+) in MB.")])])]),a._v(" "),s("h2",{attrs:{id:"how-to-apply-changes-from-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-apply-changes-from-cli","aria-hidden":"true"}},[a._v("#")]),a._v(" How to apply changes from CLI")]),a._v(" "),s("p",[a._v("In order to apply changes via command-line interface (CLI), you can use the following command:")]),a._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('imunify-antivirus config update \'{"SECTION": {"parameter": value}}\'\n')])])])]),a._v(" "),s("p",[a._v("For example, if you want to set "),s("span",{staticClass:"notranslate"},[s("code",[a._v("MALWARE_SCAN_INTENSITY.cpu = 5")])]),a._v(" from a command line, then you should execute the following command:")]),a._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('imunify-antivirus config update \'{"MALWARE_SCAN_INTENSITY": {"cpu": 5}}\'\n')])])])]),a._v(" "),s("h2",{attrs:{id:"overridable-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overridable-config","aria-hidden":"true"}},[a._v("#")]),a._v(" Overridable config")]),a._v(" "),s("p",[a._v("Starting from ImunifyAV(+) v.5.8, we introduce the overridable config which provides the ability to provision default config for the whole fleet of Imunify servers and keep the ability for fine-tuning each particular server depending on its requirements.")]),a._v(" "),s("p",[s("strong",[a._v("Configs organization")]),a._v(":")]),a._v(" "),s("ul",[s("li",[a._v("A new directory for custom configs. The local overrides of the main config are put there: "),s("span",{staticClass:"notranslate"},[s("code",[a._v("/etc/sysconfig/imunify360/imunify360.config.d/")])])]),a._v(" "),s("li",[a._v("The old config "),s("span",{staticClass:"notranslate"},[s("code",[a._v("/etc/sysconfig/imunify360/imunify360.config")])]),a._v(" is now linked to the "),s("span",{staticClass:"notranslate"},[s("code",[a._v("imunify360.config.d/90-local.config")])]),a._v(". It contains changes made through UI as well as through CLI.")]),a._v(" "),s("li",[a._v("Configs in that directory will override the "),s("span",{staticClass:"notranslate"},[s("code",[a._v("imunify360-base.config")])]),a._v(' and each other in lexical order. First-level "sections" (like '),s("span",{staticClass:"notranslate"},[s("code",[a._v("FIREWALL")])]),a._v(') are merged, while second-level "options" (like '),s("span",{staticClass:"notranslate"},[s("code",[a._v("FIREWALL.TCP_IN_IPv4")])]),a._v(") are replaced completely.")])]),a._v(" "),s("p",[a._v("This way you can keep your local customizations, but still be able to rollout the main config.")]),a._v(" "),s("p",[a._v("The CLI command to check the default configuration before merging with "),s("span",{staticClass:"notranslate"},[s("code",[a._v("90-local.config")])]),a._v(":")]),a._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("imunify-antivirus config show defaults\n")])])])]),a._v(" "),s("p",[a._v("Here is an example of custom server configuration:")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th"),a._v(" "),s("th")])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("span",{staticClass:"notranslate"},[s("code",[a._v("imunify360-base.config")])]),s("br"),s("br"),a._v("Provided by Imunify installation. Contains default recommended configuration")]),a._v(" "),s("td",[s("span",{staticClass:"notranslate"},[s("code",[a._v("FIREWALL:")])]),s("br"),s("span",{staticClass:"notranslate"},[s("code",[a._v("TCP_IN_IPv4:")])]),s("br"),s("code",[a._v("- '20'")]),s("br"),s("code",[a._v("- '8880'")]),s("br"),s("span",{staticClass:"notranslate"},[s("code",[a._v("port_blocking_mode: ALLOW")])])])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[s("code",[a._v("imunify360.config.d/50-common.config")])]),s("br"),s("br"),a._v("Provisioned by server owner to the fleet of servers.")]),a._v(" "),s("td",[s("span",{staticClass:"notranslate"},[s("code",[a._v("FIREWALL:")])]),s("br"),s("span",{staticClass:"notranslate"},[s("code",[a._v("TCP_IN_IPv4:")])]),s("br"),s("code",[a._v("- '20'")]),s("br"),s("code",[a._v("- '21'")]),s("br"),s("span",{staticClass:"notranslate"},[s("code",[a._v("port_blocking_mode: DENY")])])])]),a._v(" "),s("tr",[s("td",[s("span",{staticClass:"notranslate"},[s("code",[a._v("imunify360.config.d/90-local.config")])]),s("br"),s("br"),a._v("Contains local customization per server individually.")]),a._v(" "),s("td",[s("span",{staticClass:"notranslate"},[s("code",[a._v("FIREWALL:")])]),s("br"),s("span",{staticClass:"notranslate"},[s("code",[a._v("TCP_IN_IPv4:")])]),s("br"),s("code",[a._v("- '20'")]),s("br"),s("code",[a._v("- '22'")]),s("br"),s("code",[a._v("- '12345'")])])])])]),a._v(" "),s("p",[a._v("The resulting (merged) configuration will look like this:")]),a._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("FIREWALL:\n  TCP_IN_IPv4:\n  - '20'\n  - '22'\n  - '12345'\n  port_blocking_mode: DENY\n")])])])]),a._v(" "),s("p",[a._v('The mechanics is as follows: first-level "sections" - for example '),s("span",{staticClass:"notranslate"},[s("code",[a._v("FIREWALL")])]),a._v(' are merged, while second-level "options" - for example '),s("span",{staticClass:"notranslate"},[s("code",[a._v("FIREWALL.TCP_IN_IPv4")])]),a._v(" are replaced completely.")]),a._v(" "),s("p",[a._v("Those who don’t need this type of overridable configs can continue using custom configurations in the "),s("span",{staticClass:"notranslate"},[s("code",[a._v("/etc/sysconfig/imunify360/imunify360.config")])]),a._v(".")]),a._v(" "),s("p",[a._v("This feature is backward compatible.")])])},[],!1,null,null,null);t.default=n.exports}}]);