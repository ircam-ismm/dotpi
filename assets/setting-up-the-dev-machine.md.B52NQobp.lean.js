import{_ as s,c as a,a3 as o,o as n}from"./chunks/framework.B5QXucYL.js";const t="/dotpi/assets/windows_apt_install_npm_error_fix_missing.JX1fBN35.png",h=JSON.parse('{"title":"Setting up a dev machine","description":"","frontmatter":{},"headers":[],"relativePath":"setting-up-the-dev-machine.md","filePath":"setting-up-the-dev-machine.md"}'),i={name:"setting-up-the-dev-machine.md"};function l(p,e,c,d,r,u){return n(),a("div",null,e[0]||(e[0]=[o(`<h1 id="setting-up-a-dev-machine" tabindex="-1">Setting up a dev machine <a class="header-anchor" href="#setting-up-a-dev-machine" aria-label="Permalink to &quot;Setting up a dev machine&quot;">​</a></h1><p>For general information, please see <a href="https://ircam-ismm.github.io/webaudio-tutorials/first-steps/setting-up-environment.html" target="_blank" rel="noreferrer">Web development</a>.</p><h2 id="on-any-operating-system-os" tabindex="-1">On any operating system (OS) <a class="header-anchor" href="#on-any-operating-system-os" aria-label="Permalink to &quot;On any operating system (OS)&quot;">​</a></h2><p><em>dotpi</em> requires:</p><ul><li><a href="https://nodejs.org/fr/download" target="_blank" rel="noreferrer">Node.js</a> LTS (long-term support) version</li><li><a href="https://www.raspberrypi.com/software/" target="_blank" rel="noreferrer">Raspberry Pi Imager</a></li></ul><h2 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h2><p>Install the common requirements:</p><ul><li><code>npm</code></li><li><code>rpi-imager</code></li></ul><p>Install also the following packages:</p><ul><li><code>git</code></li><li><code>make</code></li><li><code>curl</code></li><li><code>openssl</code></li></ul><h2 id="macos" tabindex="-1">MacOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;MacOS&quot;">​</a></h2><p>Install <code>Xcode</code> and the command-line tools. One way of doing it is to open a terminal and write the following command:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#A6E22E;">xcode-select</span><span style="color:#AE81FF;"> --install</span></span></code></pre></div><h2 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h2><p>The <em>dotpi</em> system will run inside the <code>Windows Subsystem for Linux</code>, <code>WSL</code>. It requires <code>Windows</code> version 10 or 11, and allows the run an almost complete <code>Linux</code> system within <code>Windows</code>.</p><p>The first time, run a <code>Windows PowerShell</code> as administrator.</p><p>Update <code>WSL</code> :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span>PS C:\\Users\\spamm&gt; wsl --update</span></span>
<span class="line"><span>Checking for updates.</span></span>
<span class="line"><span>The most recent version of Windows Subsystem for Linux is already installed.</span></span>
<span class="line"><span>PS C:\\Users\\spamm&gt;</span></span></code></pre></div><p>Then, install a recent <code>Linux</code> distribution. (Ubuntu 24 is known to work.)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span>PS C:\\Windows\\system32&gt; wsl --install Ubuntu</span></span>
<span class="line"><span>Launching Ubuntu...</span></span>
<span class="line"><span>root@m3410-w11:~#</span></span></code></pre></div><p>Then, use <code>wsl</code> for <em>any</em> shell command.</p><p>First, install <em>all</em> <code>Linux</code> requirements mentioned above.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span>PS C:\\Windows\\system32&gt; wsl</span></span>
<span class="line"><span>Launching Ubuntu...</span></span>
<span class="line"><span>root@m3410-w11:~# sudo apt install git make curl openssl</span></span></code></pre></div><p>If you get errors, read the messages.</p><p><img src="`+t+`" alt="windows-apt-get-error-fix-missing"></p><p>Then, try to solve the problems (within <code>WSL</code>).</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span>root@m3410-w11:~# sudo apt-get update</span></span>
<span class="line"><span>root@m3410-w11:~# sudo apt-get update --fix-missing</span></span></code></pre></div><p>Finally, install the packages again (still within <code>WSL</code>).</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span>root@m3410-w11:~# sudo apt install git make curl openssl</span></span></code></pre></div><p>Be sure to install <code>Node.js</code> <em>within</em> <code>WSL</code>.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span>PS C:\\Windows\\system32&gt; wsl</span></span>
<span class="line"><span>Launching Ubuntu...</span></span>
<span class="line"><span>root@m3410-w11:~# sudo apt install npm</span></span></code></pre></div><p><code>Raspberry Pi Imager</code> is an exception: Do <em>not</em> install it within <code>WSL</code>. (Later, do <em>not</em> run it within <code>WSL</code>.)</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>For windows, run <em>any</em> shell command within <code>WSL</code>.</p><p>If you are not logged as <code>root</code> within <code>WSL</code>, you need to prefix commands with <code>sudo</code> to install packages.</p></div><h2 id="installing-dotpi-tools" tabindex="-1">Installing <code>dotpi-tools</code> <a class="header-anchor" href="#installing-dotpi-tools" aria-label="Permalink to &quot;Installing \`dotpi-tools\`&quot;">​</a></h2><p>Open a terminal and write the command line:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#A6E22E;">npm</span><span style="color:#E6DB74;"> install</span><span style="color:#AE81FF;"> --global</span><span style="color:#E6DB74;"> @dotpi/tools</span></span></code></pre></div><p>This will write the package globally on your computer.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Depending on your installation of <code>Node.js</code>, you may need to use <code>sudo</code> to install global packages.</p><p>If you do not need it, do not use <code>sudo</code>, as it may lead to other problems.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki monokai vp-code" tabindex="0"><code><span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> npm</span><span style="color:#E6DB74;"> install</span><span style="color:#AE81FF;"> --global</span><span style="color:#E6DB74;"> @dotpi/tools</span></span></code></pre></div></div><p>Now, the command <code>dotpi-tools</code>should be available in your machine.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you prefer to use <code>npx</code> rather than installing the package globally, just replace <code>dotpi-tools</code> by <code>npx @dotpi/tools</code> in the remaining of these tutorials.</p></div>`,40)]))}const g=s(i,[["render",l]]);export{h as __pageData,g as default};
