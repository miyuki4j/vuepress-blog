import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c,a as e,b as n,e as s,f as i}from"./app-e8311e1f.js";const t={},o=i(`<h1 id="虚拟机环境搭建" tabindex="-1"><a class="header-anchor" href="#虚拟机环境搭建" aria-hidden="true">#</a> 虚拟机环境搭建</h1><h2 id="_1-wmware16-下载激活" tabindex="-1"><a class="header-anchor" href="#_1-wmware16-下载激活" aria-hidden="true">#</a> 1.wmware16 下载激活</h2><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>下载：
    https://www.123pan.com/s/HQeA-aX1Sh
    https://download3.vmware.com/software/wkst/file/VMware-workstation-full-16.0.0-16894299.exe
    
激活码：
    ZF3R0-FHED2-M80TY-8QYGC-NPKYF
    YF390-0HF8P-M81RQ-2DXQE-M2UT6
    ZF71R-DMX85-08DQY-8YMNC-PPHV8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-ubuntu22-04-镜像下载" tabindex="-1"><a class="header-anchor" href="#_2-ubuntu22-04-镜像下载" aria-hidden="true">#</a> 2.ubuntu22.04 镜像下载</h2><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>    iso:
    https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/
    https://mirrors.aliyun.com/ubuntu-releases/
    https://cn.ubuntu.com/download/desktop

    国内镜像源:
    1.清华： https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/
    2.csdn：https://blog.csdn.net/xiangxianghehe/article/details/122856771
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-ubuntu-docker-install" tabindex="-1"><a class="header-anchor" href="#_3-ubuntu-docker-install" aria-hidden="true">#</a> 3. ubuntu docker install</h2>`,6),u={id:"install-sh",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#install-sh","aria-hidden":"true"},"#",-1),m={href:"http://install.sh",target:"_blank",rel:"noopener noreferrer"},h=i(`<div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>
#!/bin/bash

for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done

# Add Docker&#39;s official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
# Add the repository to Apt sources:
echo \\
  &quot;deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\
  $(. /etc/os-release &amp;&amp; echo &quot;$VERSION_CODENAME&quot;) stable&quot; | \\
  sudo tee /etc/apt/sources.list.d/docker.list &gt; /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b={id:"uninstall-sh",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#uninstall-sh","aria-hidden":"true"},"#",-1),g={href:"http://uninstall.sh",target:"_blank",rel:"noopener noreferrer"},_=i(`<div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>
#!/bin/bash
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-ubuntu-安装-sougoupinyin" tabindex="-1"><a class="header-anchor" href="#_4-ubuntu-安装-sougoupinyin" aria-hidden="true">#</a> 4. ubuntu 安装 sougoupinyin</h2><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>https://www.ufans.top/index.php/archives/376/#:~:text=%E5%AE%89%E8%A3%85%E5%91%BD%E4%BB%A4%3A%20sudo%20dpkg%20-i%20sogoupinyin_%204.0.1.2800%20_x%2086,qml-module-qtquick%202%20sudo%20apt%20install%20libgsettings-qt%201%20%E5%AE%8C%E6%88%90%E5%90%8E%E6%B3%A8%E9%94%80%E6%88%96%E9%87%8D%E5%90%AFUbuntu%E5%8D%B3%E5%8F%AF%E3%80%82
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function k(f,x){const d=r("ExternalLinkIcon");return l(),c("div",null,[o,e("h3",u,[v,n(),e("a",m,[n("install.sh"),s(d)])]),h,e("h3",b,[p,n(),e("a",g,[n("uninstall.sh"),s(d)])]),_])}const A=a(t,[["render",k],["__file","2024-01-17.html.vue"]]);export{A as default};
