import{r as e,o,c as r,a as t,w as a,b as n}from"./404.md.1ad41aff.js";const l='{"title":"Software and preparation","description":"","frontmatter":{"title":"Software and preparation","nav_order":3,"prefix":"3."},"headers":[{"level":3,"title":"A valid copy of Bedrock Minecraft","slug":"a-valid-copy-of-bedrock-minecraft"},{"level":2,"title":"Picking an Editor","slug":"picking-an-editor"},{"level":3,"title":"Plaintext Editors","slug":"plaintext-editors"},{"level":3,"title":"Dedicated Editors","slug":"dedicated-editors"},{"level":3,"title":"Mobile Editors","slug":"mobile-editors"},{"level":3,"title":"Additional Notes","slug":"additional-notes"},{"level":3,"title":"Additional Software","slug":"additional-software"},{"level":3,"title":"Blockbench","slug":"blockbench"},{"level":3,"title":"Image Editors","slug":"image-editors"},{"level":2,"title":"Setting up your workspace","slug":"setting-up-your-workspace"},{"level":2,"title":"Learning to reference","slug":"learning-to-reference"},{"level":2,"title":"Vanilla Packs","slug":"vanilla-packs"},{"level":2,"title":"Documentation","slug":"documentation"},{"level":2,"title":"Your progress so far","slug":"your-progress-so-far"}],"relativePath":"guide/software-preparation.md","lastUpdated":1626901077211}',i={},s=t("p",null,"Before you can start creating addons, you first have to install the required tools and applications. While development will be easiest on windows 10, we have provided mobile alternatives for both Android and ios, where applicable.",-1),d=t("h3",{id:"a-valid-copy-of-bedrock-minecraft"},[t("a",{class:"header-anchor",href:"#a-valid-copy-of-bedrock-minecraft","aria-hidden":"true"},"#"),n(" A valid copy of Bedrock Minecraft")],-1),c=t("ul",null,[t("li",null,[t("a",{href:"https://www.microsoft.com/en-us/p/minecraft-for-windows-10/9nblggh2jhxj?activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"},"Windows 10")]),t("li",null,[t("a",{href:"https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=en",target:"_blank",rel:"noopener noreferrer"},"Android")]),t("li",null,[t("a",{href:"https://apps.apple.com/us/app/minecraft/id479516143",target:"_blank",rel:"noopener noreferrer"},"iOS")])],-1),u=t("h2",{id:"picking-an-editor"},[t("a",{class:"header-anchor",href:"#picking-an-editor","aria-hidden":"true"},"#"),n(" Picking an Editor")],-1),h=t("p",null,"Addons can be created using any text editor, however it's much more comfortable to work in a dedicated editor. A good editor can give you code-completion, error-detection, and in-editor documentation.",-1),p=t("p",null,"There are strong opinions about the best editor for beginners, but generally speaking you cannot go wrong selecting any of the following editors.",-1),f=t("p",null,[t("em",null,"Recommendations are starred.")],-1),m=t("h3",{id:"plaintext-editors"},[t("a",{class:"header-anchor",href:"#plaintext-editors","aria-hidden":"true"},"#"),n(" Plaintext Editors")],-1),g=t("p",null,"Plaintext editors are great for programmers, advanced users, and confident computer-users. Editors in this section are very powerful and customizable, but may be difficult to use.",-1),k=t("ul",null,[t("li",null,[n("⭐"),t("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},[t("em",null,"VSCode")]),n(" - is optimal in many cases, due to the fact that it has a variety of extensions for addon development. ("),t("em",null,"Warning: Do not install Visual Studio, which is something different"),n(")")]),t("li",null,[t("a",{href:"https://www.sublimetext.com/",target:"_blank",rel:"noopener noreferrer"},[t("em",null,"Sublime Text")]),n(" - is another code editor with good theme customization capabilities.")]),t("li",null,[t("a",{href:"https://atom.io/",target:"_blank",rel:"noopener noreferrer"},[t("em",null,"Atom")]),n(" - is another solid editor, which can be thought of as the precursor to VSCode.")])],-1),b=t("h3",{id:"dedicated-editors"},[t("a",{class:"header-anchor",href:"#dedicated-editors","aria-hidden":"true"},"#"),n(" Dedicated Editors")],-1),w=t("p",null,"Dedicated editors are great for beginners. You will be somewhat limited in power and customization, but the development experience is very smooth.",-1),v=t("ul",null,[t("li",null,[n("⭐"),t("a",{href:"https://github.com/bridge-core/bridge.",target:"_blank",rel:"noopener noreferrer"},[t("em",null,"bridge.")]),n(" - is a visual software for Minecraft addon development. It offers JSON in tree view. However, the process of creating addons in bridge. is parallel to creating them in a Code editor, so once you grasped the basics you could easily switch to using bridge.")]),t("li",null,[t("a",{href:"https://hanprog.itch.io/core-coder-one",target:"_blank",rel:"noopener noreferrer"},[t("em",null,"CoreCoder (Free)")]),n(" - is a unique Code Editor developed specifically for addon creation with JSON linting and autocomplete.")])],-1),y=t("h3",{id:"mobile-editors"},[t("a",{class:"header-anchor",href:"#mobile-editors","aria-hidden":"true"},"#"),n(" Mobile Editors")],-1),_=t("ul",null,[t("li",null,[t("strong",null,"Android"),n(": "),t("a",{href:"https://play.google.com/store/apps/details?id=com.foxdebug.acodefree",target:"_blank",rel:"noopener noreferrer"},[t("em",null,"ACode Editor")])]),t("li",null,[t("strong",null,"iOS"),n(": "),t("a",{href:"https://apps.apple.com/us/app/kodex/id1038574481",target:"_blank",rel:"noopener noreferrer"},[t("em",null,"Kodex")])])],-1),x=t("h3",{id:"additional-notes"},[t("a",{class:"header-anchor",href:"#additional-notes","aria-hidden":"true"},"#"),n(" Additional Notes")],-1),P=t("ul",null,[t("li",null,[t("strong",null,"Opening Folders:"),n(" When editing addons, it is very convenient to open an entire folder as a project, instead of just individual files. This allows you to edit the files in both the Behavior Pack and Resource Pack at the same time, and quickly switch between tasks.")]),t("li",null,[t("strong",null,"Json Linting/Prettify:"),n(" Linting is the ability to validate code as correct in real-time. Linting for json will mark things like missing commas, misplaced parens, or other formatting issues so that you can fix them. "),t("a",{href:"https://jsonlint.com/",target:"_blank",rel:"noopener noreferrer"},"Linting can also be found online"),n(", but having real-time linting built directly into your editor is very much preferred.")]),t("li",null,[t("strong",null,"Built in Terminal:"),n(" I find a terminal built into my editor to be very useful. I often use python scripting to supplement my workflow, and having easy access to a terminal speeds up that workflow.")])],-1),S=t("p",null,"Many packages exist for VSCode that make editing addons easier:",-1),C=t("ul",null,[t("li",null,[t("a",{href:"https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension",target:"_blank",rel:"noopener noreferrer"},"Blockceptions Minecraft Bedrock Development")]),t("li",null,[t("a",{href:"https://marketplace.visualstudio.com/items?itemName=arcensoth.language-mcfunction",target:"_blank",rel:"noopener noreferrer"},".mcfunction support")]),t("li",null,[t("a",{href:"https://marketplace.visualstudio.com/items?itemName=zz5840.minecraft-lang-colorizer",target:"_blank",rel:"noopener noreferrer"},".lang support")]),t("li",null,[t("a",{href:"https://marketplace.visualstudio.com/items?itemName=destruc7i0n.vscode-bedrock-definitions",target:"_blank",rel:"noopener noreferrer"},"Bedrock Definitions")]),t("li",null,[t("a",{href:"https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json",target:"_blank",rel:"noopener noreferrer"},"Prettt-json")]),t("li",null,[t("a",{href:"https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker",target:"_blank",rel:"noopener noreferrer"},"Spell Checker (for writing wiki)")]),t("li",null,[t("a",{href:"https://marketplace.visualstudio.com/items?itemName=JannisX11.snowstorm",target:"_blank",rel:"noopener noreferrer"},"Snowstorm Particle Editor")]),t("li",null,[t("a",{href:"https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2",target:"_blank",rel:"noopener noreferrer"},"Bracket Pair Colorizer")]),t("li",null,[t("a",{href:"https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator",target:"_blank",rel:"noopener noreferrer"},"UUID Generator")])],-1),B=t("p",null,"You should be aware that it is a application that you benefit most from when you use it exclusively for editing your addon. Switching between a different editor and bridge. creates a bit of an overhead in your workflow (more later). The program builds up a knowledge base of your files as you use the editor. This enables very fast and dynamic auto-completions and file validation but also means that all of your files are cached in the background by default. There are two ways to workaround Bridge's caching strategy:",-1),D=t("ol",null,[t("li",null,[n("Increase or remove the "),t("code",null,"bridge-file-version: #11"),n(" comment the app leaves in your files after editing a file without bridge.")]),t("li",null,[n("Add files that you want to edit without bridge. to a "),t("code",null,".no-cache"),n(" file at the root of your behavior pack")])],-1),E=t("p",null,"Due to the nature of the file versioning system, most scripts and tools will continue to work as expected.",-1),A=t("p",null,[n("For further guidance on the editor, feel free to contact "),t("a",{href:"https://twitter.com/solvedDev",target:"_blank",rel:"noopener noreferrer"},"solvedDev"),n(". bridge. also has an "),t("a",{href:"https://discord.gg/wcRJZN3",target:"_blank",rel:"noopener noreferrer"},"official Discord server"),n(", with announcements, plugin discussion, addon help, and more.")],-1),N=t("br",null,null,-1),V=t("h3",{id:"additional-software"},[t("a",{class:"header-anchor",href:"#additional-software","aria-hidden":"true"},"#"),n(" Additional Software")],-1),I=t("h3",{id:"blockbench"},[t("a",{class:"header-anchor",href:"#blockbench","aria-hidden":"true"},"#"),n(" Blockbench")],-1),M=t("ul",null,[t("li",null,[n("⭐ "),t("a",{href:"https://blockbench.net/",target:"_blank",rel:"noopener noreferrer"},[t("strong",null,"Blockbench")]),n(" is a 'boxy 3D model editor ' typically used to create Minecraft entity/block models, textures and animations. Also provides a web-browser version compatible with mobile.")])],-1),j=t("h3",{id:"image-editors"},[t("a",{class:"header-anchor",href:"#image-editors","aria-hidden":"true"},"#"),n(" Image Editors")],-1),L=t("ul",null,[t("li",null,[n("⭐ "),t("a",{href:"https://krita.org/en/",target:"_blank",rel:"noopener noreferrer"},"Krita")]),t("li",null,[t("a",{href:"https://www.gimp.org/",target:"_blank",rel:"noopener noreferrer"},"GIMP")]),t("li",null,[t("a",{href:"https://www.adobe.com/products/photoshop",target:"_blank",rel:"noopener noreferrer"},[n("Photoshop "),t("em",null,"(≈$10/m)")])])],-1),R=t("p",null,[t("img",{src:"/bedrock-wiki-vite/assets/images/guide/blockbench_workspace.png",alt:""})],-1),T=t("h2",{id:"setting-up-your-workspace"},[t("a",{class:"header-anchor",href:"#setting-up-your-workspace","aria-hidden":"true"},"#"),n(" Setting up your workspace")],-1),z=t("p",null,[t("em",null,"The remainder of this Guide assumes you are using VSCode. You may also follow along in other editors.")],-1),W=t("p",null,"Let's create your first addon workspace in Visual Studio Code now.",-1),O=t("ol",null,[t("li",null,[n("Open VSCode ("),t("em",null,"Visual Studio Code, the code editor"),n(")")]),t("li",null,[n('Create a folder named "'),t("code",null,"your_pack_name_RP"),n('" in '),t("code",null,"development_resource_packs"),n(". "),t("strong",null,[n("I'll refer to this folder as "),t("code",null,"RP")]),n(", in accordance with the "),t("a",{href:"https://wiki.bedrock.dev/knowledge/style-guide",target:"_blank",rel:"noopener noreferrer"},"Style Guide"),n(".")]),t("li",null,[n('Create a folder "'),t("code",null,"your_pack_name_BP"),n('" in '),t("code",null,"development_behavior_packs"),n(". "),t("strong",null,[n("I'll refer to this folder as "),t("code",null,"BP")]),n(".")]),t("li",null,[n("Go to "),t("code",null,"File > Add folder to workspace..."),n(" and choose "),t("code",null,"BP"),n(". Do the same with "),t("code",null,"RP"),n(".")]),t("li",null,[n("Press "),t("code",null,"File > Save Workpsace as..."),n(" to save the workspace file to your Desktop. Whenever you're working on your addon, all you have to do is open the workspace by double-clicking, and you will get quick access to both BP and RP folders.")])],-1),F=t("h2",{id:"learning-to-reference"},[t("a",{class:"header-anchor",href:"#learning-to-reference","aria-hidden":"true"},"#"),n(" Learning to reference")],-1),Y=t("h2",{id:"vanilla-packs"},[t("a",{class:"header-anchor",href:"#vanilla-packs","aria-hidden":"true"},"#"),n(" Vanilla Packs")],-1),G=t("p",null,[n("Referencing means looking at other addons to find out how certain results are achieved. Minecraft's unmodified files are a good place to start. Download the "),t("a",{href:"https://aka.ms/resourcepacktemplate",target:"_blank",rel:"noopener noreferrer"},"Vanilla Resource Pack"),n(" and "),t("a",{href:"https://aka.ms/behaviorpacktemplate",target:"_blank",rel:"noopener noreferrer"},"Vanilla Behavior Pack"),n(" and get creative! I recommend adding them to your workspace for easy referencing.")],-1),J=t("p",null,[n("Once you complete this guide, you can download and reference some open-source addons from, for example, "),t("a",{href:"https://mcpedl.com/?cookie_check=1",target:"_blank",rel:"noopener noreferrer"},"MCPEDL"),n(". You can also upload your own addons there.")],-1),q=t("h2",{id:"documentation"},[t("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),n(" Documentation")],-1),U=t("p",null,[n("The best tool you have when learning about addons is the documentation. "),t("a",{href:"https://bedrock.dev/",target:"_blank",rel:"noopener noreferrer"},"bedrock.dev"),n(" contains the best, and most up to date addon documentation. Make sure you are using the documentation for the current edition (bedrock.dev/docs/stable).")],-1),K=t("hr",null,null,-1),H=t("h2",{id:"your-progress-so-far"},[t("a",{class:"header-anchor",href:"#your-progress-so-far","aria-hidden":"true"},"#"),n(" Your progress so far")],-1),X=t("p",null,[t("strong",null,"What you've done:")],-1),Z=t("ul",null,[t("li",null,"[x] Installed the necessary software;"),t("li",null,"[x] Downloaded the Vanilla Example files;"),t("li",null,"[x] Located your com.mojang folder and created your addon's workspace.")],-1),$=t("p",null,[t("strong",null,"What you are to do next:")],-1),Q=t("ul",null,[t("li",null,"[ ] Create your addons manifests, pack icons;"),t("li",null,[n("[ ] Learn to use "),t("code",null,".mcfunction"),n(", "),t("code",null,".mcstructure"),n(", "),t("code",null,".mcpack"),n(" and "),t("code",null,".mcaddon"),n(".")])],-1);i.render=function(n,l,i,ee,oe,re){const te=e("Spoiler");return o(),r("div",null,[s,d,c,u,h,p,f,m,g,k,b,w,v,y,_,x,t(te,{title:"Features to look for in a Code Editor"},{default:a((()=>[P])),_:1}),t(te,{title:"VSCode Extensions for Addon development"},{default:a((()=>[S,C])),_:1}),t(te,{title:"If you choose to use bridge."},{default:a((()=>[B,D,E,A])),_:1}),N,V,I,M,j,L,R,T,z,W,O,F,Y,G,J,q,U,K,H,X,Z,$,Q])};export default i;export{l as __pageData};
