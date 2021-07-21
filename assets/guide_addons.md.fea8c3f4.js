import{o as e,c as a,d as o}from"./404.md.1ad41aff.js";const i='{"title":"Addons Explained","description":"","frontmatter":{"title":"Addons Explained","nav_order":2,"prefix":"2."},"headers":[{"level":2,"title":"What are addons?","slug":"what-are-addons"},{"level":2,"title":"Behavior Pack Vs. Resource Pack","slug":"behavior-pack-vs-resource-pack"},{"level":3,"title":"Resource Pack","slug":"resource-pack"},{"level":3,"title":"Behavior Pack","slug":"behavior-pack"},{"level":3,"title":"Communication between packs","slug":"communication-between-packs"},{"level":2,"title":"The com.mojang folder","slug":"the-com-mojang-folder"},{"level":3,"title":"Windows","slug":"windows"},{"level":3,"title":"Android","slug":"android"},{"level":3,"title":"iOS","slug":"ios"},{"level":3,"title":"Development Packs","slug":"development-packs"}],"relativePath":"guide/addons.md","lastUpdated":1626901077211}',n={},t=o('<h2 id="what-are-addons"><a class="header-anchor" href="#what-are-addons" aria-hidden="true">#</a> What are addons?</h2><p>Addons allow us to modify the contents of our Minecraft Experience by <em>modifying</em> or <em>removing</em> existing content and <em>adding</em> our own. Addons are very powerful and allow us create custom entities, items, and blocks, as well as things like custom loot tables and crafting recipes. Your imagination is the limit!</p><p>Addons are primarily written in <a href="/guide/understanding-json.html">json</a>, which is a structured data-format. An addon is essentially a collection of json files, images, and sounds, which modify or add to the game in some way.</p><h2 id="behavior-pack-vs-resource-pack"><a class="header-anchor" href="#behavior-pack-vs-resource-pack" aria-hidden="true">#</a> Behavior Pack Vs. Resource Pack</h2><p>Addons are split into two pack types: Resource Packs, and Behavior Packs. Both can function independently, but they are most commonly used together. When you have both a Resource Pack and Behavior Pack, this is referred to as an <em>addon</em>.</p><h3 id="resource-pack"><a class="header-anchor" href="#resource-pack" aria-hidden="true">#</a> Resource Pack</h3><p>The Resource Pack, also known as the <em>client</em>, or RP, is responsible for the <em>visuals</em> and <em>sounds</em> in your addon. This includes things like:</p><ul><li>Textures</li><li>Sounds</li><li>Geometry</li><li>Animations</li><li>Particles</li></ul><h3 id="behavior-pack"><a class="header-anchor" href="#behavior-pack" aria-hidden="true">#</a> Behavior Pack</h3><p>The Behavior Pack, also known as the <em>server</em>, or BP, is responsible for the <em>logic</em> of your addon. This can include things like:</p><ul><li>How your entity acts</li><li>Crafting recipes</li><li>Loot tables</li><li>Custom functions</li></ul><h3 id="communication-between-packs"><a class="header-anchor" href="#communication-between-packs" aria-hidden="true">#</a> Communication between packs</h3><p>In most cases, you will have both an BP and a BP together. These packs can communicate with each other, in the sense that assets defined in one can be accessed in the other. For example, when creating a custom entity, you need two files:</p><ul><li>An RP entity definition, which describes how your entity will <em>look</em></li><li>A BP entity definition, which describes how your entity will <em>act</em></li></ul><h2 id="the-com-mojang-folder"><a class="header-anchor" href="#the-com-mojang-folder" aria-hidden="true">#</a> The com.mojang folder</h2><p>The <code>com.mojang</code> folder is a special folder where we build our addons. Minecraft understand this location, and addon-files placed here will appear in-game. All files we access or create will be placed somewhere in this folder.</p><p>You should create a shortcut to the <code>com.mojang</code> folder on your Desktop, so you can easily access it at any time.</p><h3 id="windows"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><p><code>C:\\Users\\USERNAME\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang</code></p><h3 id="android"><a class="header-anchor" href="#android" aria-hidden="true">#</a> Android</h3><p><code>Phone&gt;games&gt;com.mojang</code></p><h3 id="ios"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h3><p><code>My iDevice&gt;Minecraft&gt;games&gt;com.mojang</code></p><h3 id="development-packs"><a class="header-anchor" href="#development-packs" aria-hidden="true">#</a> Development Packs</h3><p>We will develop our addon in <code>development_behavior_packs</code> and <code>development_resource_packs</code>. When you make changes within these folders, you can <em>exit and re-enter a world with the packs applied</em>, to automatically reload the content. This allows you to quickly test your addon without reloading minecraft.</p><p><code>resource_packs</code> and <code>behavior_packs</code> on the other hand contain stable addons, including those imported via <code>.mcpack</code>. We can ignore these folders for now.</p>',26);n.render=function(o,i,n,s,r,d){return e(),a("div",null,[t])};export default n;export{i as __pageData};
