# Cursor Pro 自动化工具使用说明

自动注册账号，自动刷新本地token，解放双手。

::: warning 重要提示
1. 确保电脑安装了Google Chrome浏览器，没有？[请点击这里下载](https://www.google.cn/intl/zh-CN/chrome/)
2. Cursor Web端必须登录账号，不管账号是否有效，登录是必须的
3. 确保电脑网络流畅，最好有国外的节点。**不要开启全局代理**
:::

## 下载安装

1. 从 [GitHub Releases](https://github.com/chengazhen/cursor-auto-free/releases) 下载最新版本
2. 根据你的系统选择对应的版本：
   - Windows：直接下载并运行 `CursorPro.exe`
   - Mac（Intel）：选择 x64 版本
   - Mac（M系列）：选择 ARM64(aarch64) 版本

### Mac 用户额外步骤

1. 打开终端，进入应用所在目录
2. 执行以下命令使文件可执行：
```bash
chmod +x ./CursorPro
```

如果遇到以下提示，[点击这里查看解决方法](https://sysin.org/blog/macos-if-crashes-when-opening/)

![安全提示](../assets/imgs/6.png)

## 配置说明

::: warning 重要前提
必须使用 Cloudflare 域名邮箱！请先完成以下步骤：
1. 将你的域名托管到 Cloudflare
2. 在 Cloudflare 中配置域名邮箱
3. 设置邮件路由规则
:::

### Cloudflare 邮箱配置

1. 在 Cloudflare 控制面板，点击左侧的"电子邮件"
   ![Cloudflare邮箱设置](../assets/imgs/1.jpg)

2. 点击"路由规则"
   ![路由规则](../assets/imgs/2.jpg)

3. 点击右侧"编辑"
   ![编辑规则](../assets/imgs/3.jpg)

4. 选择"发送到电子邮件"，根据你选择的接收方式（临时邮箱或 IMAP）填写目标邮箱
   ![转发设置](../assets/imgs/4.jpg)

### 环境配置文件

1. 下载 [.env.example](https://github.com/chengazhen/cursor-auto-free) 并重命名为 `.env`
   ![环境配置](../assets/imgs/5.jpg)

::: tip Mac 用户提示
如果无法重命名，请使用终端命令：
```bash
touch .env
```
:::

### 接收方式一：使用临时邮箱（推荐）

使用 [tempmail.plus](https://tempmail.plus/zh/#!) 作为接收邮箱，配置 `.env` 文件：
```bash
DOMAIN='xxxxx.me'    # 你的 Cloudflare 域名
TEMP_MAIL='xxxxxx'   # tempmail.plus 生成的临时邮箱地址
TEMP_MAIL_EPIN=xxxxxx
TEMP_MAIL_EXT=@mailto.plus
```

### 接收方式二：使用 IMAP 邮箱

如果无法使用临时邮箱，可以使用自己的邮箱（如 QQ、Gmail 等）配置 IMAP：
```bash
DOMAIN='wozhangsan.me'  # 你的 Cloudflare 域名
TEMP_MAIL=null          # 设置为 null 启用 IMAP 模式

# IMAP服务器配置
IMAP_SERVER=imap.xxxxx.com  # 例如：QQ邮箱，Gmail
IMAP_PORT=993               # 993
IMAP_USER=xxxx@xxxx.com    # 接收邮箱地址
IMAP_PASS=xxxxxxxxxxxxx    # 邮箱授权码
# IMAP_DIR=                  # [可选] 默认为收件箱(inbox)
```

## 运行验证

### Windows 用户
直接双击运行 `CursorPro.exe`

### Mac 用户
1. 在终端中运行：
```bash
./CursorPro
```
2. 或直接在访达（Finder）中双击运行

### 验证步骤
1. 等待程序自动完成所有操作
2. 看到"脚本执行完毕"提示后，重启你的编辑器
3. 检查编辑器中显示的账号信息是否与脚本输出的日志账号一致

::: tip 使用注意事项
- 确保网络连接稳定
- 等待程序自动完成所有操作
- 不要开启全局代理
:::

## 免责声明

本工具仅供学习研究使用，请遵守相关服务条款。使用本工具产生的任何后果由使用者自行承担。严禁将本工具用于任何商业用途，包括但不限于销售、租赁或其他营利行为。违反许可证条款的行为将承担相应的法律责任。

## 支持作者

如果这个工具对你有帮助，可以请作者喝杯奶茶，这样才有更新的动力～

![💰 打赏作者](../assets/imgs/2641737539778_.pic.jpg)
