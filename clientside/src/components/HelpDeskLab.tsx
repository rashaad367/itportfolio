import React from "react";

const HelpDeskLab: React.FC = () => {
    return (<>
        <div className="container-lg">
            <h1 className="heading center">Help Desk Lab</h1>
            <div className="my-16">
                 <h2 className="sub-heading">Remote Desktop</h2>
                <h3 className="bg-white mt-12">Windows 10 Remote</h3>
                <p>Firstly, we will make sure the user computer has remote access
                on by going to "ThisPC", right clicking for properties, remote settings,
                and using helpdesk or admin credentials if required. Next, we will check allow remote connections
                and allow remote desktop connection on helpdesk computer and type in computer on server that you
                are trying to connect to. If you can't use open remote desktop go to user computer's command line and type
                "ipconfig /flushdns" and retry. You will be logged in as yourself but in control of someones computer.
                Go to "ThisPC", users, click the user of interest, and hit continue. Now you can add stuff, or mess with account
                directories/folders. You can also mess with apps by adding "\appdata\" to user account path.</p>
                <h3 className="bg-white mt-12">Remote Registry</h3>
                <p>In helpdesk computer, go to start menu, windows administration tools, and open Registry Editor.
                    You may have to enable remote administration for registry. In that case, go to users computer, open
                    their start menu, type "services" and run services app as administrator. Next, double click
                    Remote Access Connection Manager and run, do the same with Remote Registry. Set the startup type as automatic,
                    hit apply, start, and then ok. Go back to helpdesk computer and in Registry Editor click file, and then type the
                    users computer name in. Be careful don't break the whole computer from Registry! Something neat you can do here is go
                    to Network and see if shared drive is there.
                </p>
                <h3 className="bg-white mt-12">Remoting with c$</h3>
                <p>
                    Go to file explorer and in search bar type \\&#123;computername	&#125;\c$, go into users, and go to &#123;user's&#125; account.
                </p>
                <h3 className="bg-white mt-12">Windows remote tool (windows remote assitance) file invitation</h3>
                <p>
                    Open windows rmeote assistance to help someone who has invited you. Go into computer that you are trying to remote into, go tool
                    file explorer, right click "ThisPC", click manage, go to groups, remote desktop users, see if the helpdesk account is there. Next,
                    go to "inveite someone to connect to your PC and help you" from the start menu. Invite someone to help you and save this invitation
                    as a file on the desktop. Go back to the helpdesk computer, and press use an invitation file. Remote into computer with c$ with c$\\&#123;computername\&#125;
                    in file explorer, go to users, &#123;user account&#125;, desktop, and open invitation file. The password to acess users computer is given by user.
                </p>
            </div>
            <div className="my-16">
                <h2 className="sub-heading">Static IP and DHCP</h2>
                <h3 className="bg-white mt-12">How to tell if IP is statically assigned to device</h3>
                <p>
                    You can use "ipconfig /all" in the command line and if you see "DHCP Enabled: Yes", the IP is not static. Otherwise, if you see "DHCP Enabled: No", the IP is
                    static.
                </p>
                <h3 className="bg-white mt-12">How to set up static IP address</h3>
                <p>
                    Go to control panel and click on "view network status and task". Hit change adapter settings, next hit properties, got to IPV4. From there you can assigne
                    a static IP address.
                </p>
                <h3 className="bg-white mt-12">How to set up static IPs in virtual machine</h3>
                <p>
                    Go to control panel and click on "view netowrk status and task". Go to change adapter settings, internet, properties, IPV4, and give static IP address. Next,
                    go to devices in vitural machine OS, go to network, and change to Host-only adapter.
                </p>
                <h3 className="bg-white mt-12">Removing virtual machine static IP and putting on DHCP</h3>
                <p>
                    Go to control panel, and open view netowrk status and task. Next, go to networks IPv4 and put back to default/DHCP settings. Go to virtual machine devices,
                    click network, and change to bridged adapter. You can also enabled promiscuous mode.
                </p>
            </div>
            <div className="my-16">
                <h2 className="sub-heading">Installing Windows Server 2016</h2>
                <h3 className="bg-white mt-12">Installing Windows Server 2016 &#40;desktop experience&#41;</h3>
                <p>
                    Download the ISO file from Windows side for virtual machine use. Use you have booted on virtual machine, now its time to install the desktop experience version.
                    Select understable lanaguage / keyboard. Click install now and choose "Desktop Experience" Windows Server 2016 OS. Custom install only, and create administrator
                    account password. remember to use ctrl-alt-del to prompt for password on login screen. Remove the VM disk as we don't need it anymore. Click "Yes" for Networks pop-up.
                    Check to see if Server Manager application exist. Change the computer name to something such as &#40;Server2016&#41;. Optionally, you can adjust you OS to be set for
                    best performance to decrease possible lag from here.
                </p>
                
            </div>
            <div className="my-16">
                <h2 className="sub-heading">Installing Windows 10</h2>
                <h3 className="bg-white mt-12">Installing Windows 10 with ISO/Bootable USB</h3>
                <p>
                    Download the ISO file from Windows side for virtual machine use. IMPORTANT: select create installation media (USB, DVD, ISO) for another PC, otherwise you could mess up your computer
                    Check the recommended options. Choose the ISO file and put in downloads folder. Create a virtual box &#40;don't prematurely put ISO in yet&#41;. Next, start up virtual box and
                    change to the Windows ISO you just downloaded when it prompts to one. Next, hit install and you can click "I don't have product key". Select Windows 10 Pro so you can
                    add to domain server. Select custom installation and set up langauges &#40;english, US&#41;. Skip keyboard layout for qwerty. Set up for personal use.
                    Finally, create user account. We will call it User.
                </p>
                
            </div>

            <div className="my-16">
                <h2 className="sub-heading">Active Directory Set Up</h2>
                <h3 className="bg-white mt-12">Active Directory domain services set up</h3>
                <p>
                    Go to Windows Server 2016. Open up Server Manager. Click "Manage" and then next. Select "Role-based or feature-based installtion...".
                    Next, keep note of Server IP address. Select "Active directory domain servers" and hit "Add feature". Hit next and install. Click promote server to domain.
                    Select add a new forest. Crate root domain name &#40;.org, .com, .local&#41;. Also, note that if putting online then make sure DNS isn't in use already. Next,
                    click next and create password and NETBOIS name. Hit next until you get to install, click "Install" and then auto restart.
                </p>
            </div>
            <div className="my-16">
                <h2 className="sub-heading">Chaning Computer Name</h2>
                <h3 className="bg-white mt-12">Changing computer name</h3>
                <p>
                    Go to file explorer. On older windows versions you can quickly access this with "c:" in windows search menu. Right click "ThisPC", go to properties, change settings,
                    computer name, and hit change to change the computer name. After this, restart your computer/desktop.
                </p>
            </div>
            <div className="my-16">
                <h2 className="sub-heading">RSAT Tools Helpdesk Account</h2>
                <h3 className="bg-white mt-12">RSAT tools helpdesk account</h3>
                <p>
                    Go to file explorer, right click "ThisPC" and hit "manage". Go to local users and groups, click users. Right click Administrator, and click properties.
                    Uncheck disable account, apply, and hit ok. Also, note that if arrow is pointing down on user account icon, that means account is disabled. Right click
                    Administrator and set password. Sign out, and sign in as Administrator. Go to file explorer, right click "ThisPC" and remove User. Sign out, sign in, and
                    go to start menu. Go to "add or remove programs".<br/><br/>Select "optional features / add a feature". Give access to RSAT Tools: RSAT: Active Directory Certificate Services,
                    RSAT: Active Directory Domain Services..., RSAT: DHCP Server Tools, RSAT: DNS Server Tools, RSAT: Group Policy Management Tools, RSAT: Remote Desktop Services Tools,
                    RSAT: Server Manager. After selecting these RSAT Tools, hit install. Sign out, sign back in. On Windows Server 2016 go to the command line and type ipconfig to see IPV4.
                    Change the name of windows 10 computer to say something like desktop1. Install crhome, search TeamViewer and install. Ping to Windows Server 2016 IPV4 address. Hit
                    Control Panel and View Network Status. Change adapter settings, select ethernet, and go to properties. Assign static IPV4 address while setting subnet mask and default
                    gateway to same as IP address for the Window Server 2016 server.<br/><br/> The Preffered DNS Server: &#123;server ip address&#125;, the Alternate DNS server: &#123;default gateway&#125;.
                    After, in the virtual box, select devices, select network, and choose host-only adapter. Ping to server again, see if you get reponse. Go to "ThisPC", right click to select
                    properties, change settings, select change, select domain, put in servers domain name, and then sign in with Admin or Helpdesk account. After all this, restart. Check to see
                    if desktop1 was added to server by goign to Active Directory and clicking Computers. Use a user account with administrative/helpdesk privilages through "Other user" on Windows 10 so we use
                    domain/server connected account &#40;not local account&#41;. Check if you have access to RSAT tools and server manager from that account. From here, if you want, you can pin Active
                    Directory &#40;AD&#41; to Windows taskbar.
                </p>
            </div>
            <div className="my-16">
                <h2 className="sub-heading">Active Directory In Detail</h2>
                <h3 className="bg-white mt-12">Set up active directory users and computers</h3>
                <p>
                   Go to Server Manager and click Tools. Click Active Directory Users and Computers. You can also, if you want, pin Active Directory to taskbar after right clicking
                   Active Directory. 
                </p>
                <h3 className="bg-white mt-12">Create new user in active directory</h3>
                <p>
                    Go to Active Directory. Hit drop down on domain. Right click "Users", hover over "New" and select "User".
                </p>
                <h3 className="bg-white mt-12">Copy user in active directory</h3>
                <p>
                    Go to Active Directory. Hit drop down on domain service. Go to "Users" or "Find" to find &#123;user&#125; you are looking for to copy. Right click &#123;user&#125;,
                    and click copy. You can also use this as a way to quickly create another user that may possess simlar or same properties. This is faster than having to create the
                    user and add user properties from scratch.
                </p>
                <h3 className="bg-white mt-12">Searching for user, groups, computers in active directory</h3>
                <p>
                    Right click on domain or another file. Make sure find filter is set to "Entire directory" to more easily find things. Once you have what you are looking for, click find now.
                </p>
                <h3 className="bg-white mt-12">Advanced features search on active directory</h3>
                <p>
                    When finding user/group it will state which folder they are apart of. Click the found user to bring up user properties. Go to "Object" and location is in this format "&#123;domain&#125;/&#123;folder&#125;/&#123;sub folder&#125;.
                </p>
                <h3 className="bg-white mt-12">Enabling recycle bin in active directory</h3>
                <p>
                    Go to the "Active Directory Administrative Center" applicaton. Go to domain "&#123;domain service name&#125; &#40;local&#41;"". Click "enable recycle bin", then hit ok. Hit the refresh button
                    and "enable recycle bin" should be greyed out. Check to see if you have "Deleted Objects" folder.
                </p>
            </div>
             <div className="my-16">
                <h2 className="sub-heading">Command advanced with Organizational Unit &#40;OU&#41;</h2>
                <h3 className="bg-white mt-12">Comman advanced features invovled with OU</h3>
                <p>
                    Open Server Manager. Create user account through active directory. Create or put in appropriate organizational unit. Grab user and place in OU. Go to view and
                    select advanced features, then click on OU and double lcick user so you can see attribute editor for general account info &#40;password expires, last set, principle name, etc&#41;.
                    Right click user, go to all task, and hit resultant set policy &#40;logging&#41;. Under computer selection, select another computer, browse, and then put in &#40;helpdesk&#41; desktop
                    name. Finish policy wizard setup. View policies set up on that computer.
                </p>
            </div>
            <div className="my-16">
                <h2 className="sub-heading">Group Policy Management</h2>
                <h3 className="bg-white mt-12">Working with Group Policy Management &#40;GPO&#41;</h3>
                <p>
                    Go to Server Manager, and click on tools. Hit Group Policy Management and select default domain, and then settings. View policy information &#40;tip: take screen shot of policy
                    that has to do with many accounts&#41;. If account lockout threshold is zero &#40;0 invalid log in attempts&#41; then change through Group Policy Management editor so accounts
                    don't get logged out on accident from first attempt.
                </p>
                <h3 className="bg-white mt-12">Opening Group Policy Management editor</h3>
                <p>
                    In Group Policy Management, right click default domain policy. Click edit, and it opens. Under policies and window settings you have your Security Settings and these hold the
                    account policies.
                </p>
            </div>
            <div className="my-16">
                <h2 className="sub-heading">Common Commandline Commands</h2>
                <h3 className="bg-white mt-12">Common Commands used in the Windows commandline</h3>
                <p>
                    ipconfig: shows a general overview of your Windows IP Configuration, displays the IP address, Subnet Mask, and Default Gateway for all adapters.
                    ipconfig /all: Details of every network connection including your physical &#40;MAC&#41; address, DHCP connections, lease durations, and comprehensive IPv6 data will be provided.
                    net use: shows shared drives the current user is connected to
                    net user &#123;user&#125; /domain, can be used to create, delete, enable or disable user accounts on the system and set passwords for network user accounts for server. You may have to run as
                    administrator to use this. Can also be used to quickly check if password for an account is about to expire.
                    
                </p>
            </div>
            <div className="my-16">
                <h2 className="sub-heading">Common Active Directory Issues</h2>
                <h3 className="bg-white mt-12">Common issues in active directory</h3>
                <p>
                   User gets locked out: go to users account in active directory, double click, hit unlock &#40;could be because outlook, VPN, mobile, computer, or being connected on more than two devices&#41;.
                </p>
                <p>
                    Account disabled: go to users account in active directory, double click, select account, enable account, reset password.
                </p>
                <p>
                    Account expired: either the fix is changing the password in active directory for that account or to change the expiration date &#40;find account, double click it, go to account tab to do this&#41;.
                    After this you can use "net user &#123;user account name&#125; /domain" in the command line to see if account settings are set right.
                </p>
                <p>
                    Computer is disabled: if prompted "The security database on the server does not have a computer account for this workstation trust relationship", go to active directory, go to domain, go to computers
                    and enable the computer/desktop.
                </p>
                <p>
                    Computer fallen/deleted from domain: local users should still work but domain server accounts won't. Usually when trying to log in a message appears stating "The security database on the server does
                    not have a computer account for this workstation trust relationship". In this case, ping the computer/desktop to see if it is on server. Log in as a local user whilst using &#40;..\administrator&#41;.
                    Once logged in, go to "ThisPC", its properties, and go to change settings, change computer name settings, change to workgroup, press ok and restart. Log back in and go to computer name settings and set
                    back to domain. Now go back to active directory and check if computer shows up &#40;may need to refresh&#41;.
                </p>
            </div>
            <div className="my-16">
                <h2 className="sub-heading">Removing user after adding admin account to desktop with advanced system settings</h2>
                <h3 className="bg-white mt-12">Removing users after adding admin account to desktop with advanced system settings &#40;not AD&#41; and adding to domain</h3>
                <p>
                    Go to file explorer, "ThisPC", and press manage. Go to local users and groups, users, and enable administrator account. Sign out of user account and sign in with admin account.
                    Go to file explorer, ThisPC, right click for properties, click advanced system settings, go to users profiles settings, and delete the placeholder user account. Open control panel, view network status, and
                    change the adapter settings. Set up static IP so you can connect to server form virtual environment. Through the virtual machine, go to devices, click network, and select the host-only adapter. Open
                    command line and ping domain server &#40;should give a response&#41;. Within ThisPC go to advanced system settings, the properties tab, and change computer name settings. You make the admin account a member
                    of the domain. Here you may be prompted for admin or helpdesk credentials. Now, you can check to see if desktop is added to comptuers in Active Directory. You should also check to see if you can log into
                    another users account that is on the sersver.
                </p>
            </div>
        </div>
        

            </>);
}

export default HelpDeskLab;