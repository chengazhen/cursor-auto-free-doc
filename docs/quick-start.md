# Cursor Pro Automation Tool Guide

Automatic account registration and local token refresh, completely hands-free operation.

::: warning Important Notes
1. Make sure Google Chrome browser is installed. Need it? [Download here](https://www.google.cn/intl/en/chrome/)
2. You must be logged into Cursor Web, regardless of whether the account is valid
3. Ensure stable internet connection, preferably with international access. **Do not use global proxy**
:::

## Download & Installation

1. Download the latest version from [GitHub Releases](https://github.com/chengazhen/cursor-auto-free/releases)
2. Choose the version for your system:
   - Windows: Download `CursorPro.exe` directly
   - Mac (Intel): Choose x64 version
   - Mac (M series): Choose ARM64(aarch64) version
3. Configure the environment file as described below, download the name data, and then run

### Additional Steps for Mac Users

1. Open terminal and navigate to the application directory
2. Make the file executable with:
```bash
chmod +x ./CursorPro
```

If you see this security prompt, [click here for the solution](https://sysin.org/blog/macos-if-crashes-when-opening/)

![Security Prompt](./assets/imgs/6.png)

## Configuration

::: warning Important Prerequisite
Cloudflare domain email is mandatory! Complete these steps first:
1. Host your domain on Cloudflare
2. Configure domain email in Cloudflare
3. Set up email routing rules
:::

### Cloudflare Email Setup

1. In Cloudflare dashboard, click "Email" on the left
   ![Cloudflare Email Setup](./assets/imgs/1.jpg)

2. Click "Routing Rules"
   ![Routing Rules](./assets/imgs/2.jpg)

3. Click "Edit" on the right
   ![Edit Rules](./assets/imgs/3.jpg)

4. Select "Forward to Email" and enter your target email (tempmail or IMAP)
   ![Forward Settings](./assets/imgs/4.jpg)

### Environment Configuration

1. Download [.env.example](https://github.com/chengazhen/cursor-auto-free) and rename it to `.env`
   ![Environment Config](./assets/imgs/5.jpg)

::: tip Mac Users Note
If you can't rename, use terminal command:
```bash
touch .env
```
:::

### Name Data

1. Download the name data file from [names-dataset.txt](https://github.com/chengazhen/cursor-auto-free/blob/main/names-dataset.txt) and place it in the same directory as the executable

### Method 1: Using Temporary Email (Recommended)

Use [tempmail.plus](https://tempmail.plus/en/#!) as your receiving email, configure `.env` file:
```bash
DOMAIN='xxxxx.me'    # Your Cloudflare domain
TEMP_MAIL='xxxxxx'   # tempmail.plus generated email address
TEMP_MAIL_EPIN=xxxxxx
TEMP_MAIL_EXT=@mailto.plus
```

### Method 2: Using IMAP Email

If temporary email is not suitable, you can use your own email (like QQ, Gmail) with IMAP:
```bash
DOMAIN='wozhangsan.me'  # Your Cloudflare domain
TEMP_MAIL=null          # Set to null to enable IMAP mode

# IMAP Server Configuration
IMAP_SERVER=imap.xxxxx.com  # e.g., QQ Mail, Gmail
IMAP_PORT=993               #  993
IMAP_USER=xxxx@xxxx.com    # Receiving email address
IMAP_PASS=xxxxxxxxxxxxx    # Email authorization code
# IMAP_DIR=                  # [Optional] Default is inbox
```

## Running & Verification

### Windows Users
Double-click `CursorPro.exe` to run

### Mac Users
1. Run in terminal:
```bash
./CursorPro
```
2. Or double-click in Finder

### Verification Steps
1. Wait for the program to complete all operations automatically
2. When you see the "Script execution completed" prompt, restart your editor
3. Verify that the account information shown in the editor matches the account in the script's output log

::: tip Usage Notes
- Ensure stable network connection
- Wait for the program to complete all operations automatically
- Do not use global proxy
:::

## Disclaimer

This tool is for learning and research purposes only. Please comply with relevant terms of service. Users assume all responsibility for any consequences arising from the use of this tool. Commercial use is strictly prohibited, including but not limited to sales, rental, or other profit-making activities. Violations of the license terms will result in corresponding legal liability.

## Support the Author

If this tool helps you, consider buying the author a bubble tea to motivate future updates!

![Support](./assets/imgs/7.jpg)
