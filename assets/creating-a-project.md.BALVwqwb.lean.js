import{_ as o,c as t,a3 as a,o as s}from"./chunks/framework.B5QXucYL.js";const r="/dotpi/assets/dotpi-tools-create-project.BInpuUmK.png",c="/dotpi/assets/dotpi-tools-create-project-options.Cw1hUaIF.png",n="/dotpi/assets/dotpi-tools-create-project-ssh-keys.BvadE-on.png",p="/dotpi/assets/dotpi-tools-create-project-ready.Bp6SsOhP.png",j=JSON.parse('{"title":"Creating a project","description":"","frontmatter":{},"headers":[],"relativePath":"creating-a-project.md","filePath":"creating-a-project.md"}'),i={name:"creating-a-project.md"};function d(l,e,h,m,u,y){return s(),t("div",null,e[0]||(e[0]=[a(`<h1 id="creating-a-project" tabindex="-1">Creating a project <a class="header-anchor" href="#creating-a-project" aria-label="Permalink to &quot;Creating a project&quot;">​</a></h1><p>A <em>dotpi</em> project is shared among a fleet of Raspberry Pis and allows you to configure different systems such as the type of soundcard, WiFi, or SSH key. Once created, you can install a project on several Raspberry Pis.</p><h2 id="project-directory" tabindex="-1">Project directory <a class="header-anchor" href="#project-directory" aria-label="Permalink to &quot;Project directory&quot;">​</a></h2><p>First, you need to create a directory for your <em>dotpi</em> projects. This will be a collection of projects. Choose a convenient directory - for e.g. <code>Documents</code> - and create a new one with the <code>mkdir</code> (for &quot;make directory&quot;) command:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#A6E22E;">mkdir</span><span style="color:#AE81FF;"> -p</span><span style="color:#E6DB74;"> ~/Documents/dotpi-projects</span></span></code></pre></div><p>Everytime you use <code>dotpi-tools</code>, be sure to use this directory. To go to the directory, use the <code>cd</code> (&quot;change directory&quot;) command in the terminal:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#66D9EF;">cd</span><span style="color:#E6DB74;"> ~/Documents/dotpi-projects/</span></span></code></pre></div><h2 id="creating-a-new-project" tabindex="-1">Creating a new project <a class="header-anchor" href="#creating-a-new-project" aria-label="Permalink to &quot;Creating a new project&quot;">​</a></h2><p>Now that you&#39;re in the proper directory, create a new project using the <code>dotpi-tools</code> wizard:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#66D9EF;">cd</span><span style="color:#E6DB74;"> ~/Documents/dotpi-projects/</span></span>
<span class="line"><span style="color:#A6E22E;">dotpi-tools</span><span style="color:#AE81FF;"> --create-project</span></span></code></pre></div><p>Your terminal should look like the following:</p><p><img src="`+r+'" alt="create-project"></p><p>Then, follow the wizard. It will allow you to configure systems (soundcard, WiFi, keyboard, SSH, etc.) and install some modules (dotpi-manager). Press <code>Enter</code> to accept default options, or type a new value and confirm with <code>Enter</code>.</p><p><img src="'+c+'" alt="create-project-options"></p><p>It is recommended to generate and install <code>SSH</code> keys for the new project.</p><p><img src="'+n+'" alt="create-project-ssh-keys"></p><p>Your project is now ready to be installed on a Rasberry Pi.</p><p><img src="'+p+'" alt="create-project-ready"></p><p><a class="action" href="./installing-a-raspberry-pi.html">Installing a Raspberry Pi</a></p>',19)]))}const f=o(i,[["render",d]]);export{j as __pageData,f as default};
