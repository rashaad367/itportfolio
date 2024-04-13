import React from "react";

const HelpDeskLab: React.FC = () => {
  return (
    <>
      <div className="container-lg">
        <h1 className="heading center">Help Desk Lab</h1>
        <div className="my-16">
          <h2 className="sub-heading">Remote Desktop</h2>
          <h3 className="bg-white mt-12">Windows 10 Remote</h3>
          <p>
            Firstly, we will make sure the user's computer has remote access by going to "ThisPC", right-clicking for properties, going to remote settings, and
            using helpdesk or admin credentials if required. Next, we will check “allow remote connections” and allow remote desktop connection on the helpdesk
            computer and type in the computer on the server that you are trying to connect to. If you can't open the remote desktop application go to the user's
            computer's command line, type "ipconfig /flushdns" and retry. You will be logged in as yourself but in control of someone's computer. Go to
            "ThisPC", users, click the user of interest, and hit continue. Now you can add stuff, or mess with account directories/folders. You can also mess
            with apps by adding "\appdata\" to the user account path.
          </p>
          <h3 className="bg-white mt-12">Remote Registry</h3>
          <p>
            In the helpdesk computer, go to the start menu, windows administration tools, and open Registry Editor. You may have to enable remote administration
            for Registry. In that case, go to the user's computer, open their start menu, type "services" and run the services app as administrator. Next,
            double-click the Remote Access Connection Manager, run, and do the same with Remote Registry. Set the startup type as automatic, hit apply, start,
            and then ok. Go back to the helpdesk computer and in Registry Editor click the file dropdown, and then type the user's computer name in. Be careful
            not to break the whole computer from the Registry! Something neat you can do here is go to Network and see if shared drives are there.
          </p>
          <h3 className="bg-white mt-12">Remoting with c$</h3>
          <p>Go to File Explorer and in the search bar type \\&#123;computername&#125;\c$, go into users, and go to the user's account.</p>
          <h3 className="bg-white mt-12">Windows remote tool &#40;windows remote assistance&#41; file invitation</h3>
          <p>
            Open Windows Remote Assistance to help someone who has invited you. Go into the computer you are trying to remote into, go to File Explorer,
            right-click "ThisPC", click manage, go to groups, remote desktop users, and see if the helpdesk account is there. Next, go to "invite someone to
            connect to your PC and help you" from the start menu. Invite someone to help you and save this invitation as a file on the desktop. Go back to the
            helpdesk computer, and press use an invitation file. Remote into computer with c$ with c$\\&#123;computername\&#125; in file explorer, go to users,
            &#123;user account&#125;, desktop, and open invitation file. The password to remote into the user's computer is given by the user.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Static IP and DHCP</h2>
          <h3 className="bg-white mt-12">How to tell if IP is statically assigned to device</h3>
          <p>
            You can use "ipconfig /all" in the command line and if you see "DHCP Enabled: Yes", the IP is not static. Otherwise, if you see "DHCP Enabled: No",
            the IP is static.
          </p>
          <h3 className="bg-white mt-12">How to set up static IP address</h3>
          <p>
            Go to the control panel and click "view network status and task". Go to change adapter settings, internet, properties, IPV4, and give a static IP
            address.
          </p>
          <h3 className="bg-white mt-12">How to set up static IPs in virtual machine</h3>
          <p>
            Go to the control panel and click "view network status and task". Go to change adapter settings, internet, properties, IPV4, and give a static IP
            address. Next, go to devices in virtual machine OS, go to network, and change to Host-only adapter.
          </p>
          <h3 className="bg-white mt-12">Removing virtual machine static IP and putting on DHCP</h3>
          <p>
            Go to the control panel, and open view network status and task. Next, go to network IPv4 and put it back to default/DHCP settings. Go to virtual
            machine devices, click network, and change to bridged adapter. You can also enable promiscuous mode if need be.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Installing Windows Server 2016</h2>
          <h3 className="bg-white mt-12">Installing Windows Server 2016 &#40;desktop experience&#41;</h3>
          <p>
            Download the ISO file from the Windows site for virtual machine use. After booting up the virtual machine, we need to install the desktop experience
            version of Windows Server 2016. Select an understandable language/keyboard. Click Install Now and choose "Desktop Experience" Windows Server 2016
            OS. Custom install only, and create an administrator account password. remember to use Ctrl-Alt-Del to prompt for the password on the login screen.
            Remove the VM disk as we don't need it anymore. Click "Yes" for the Networks pop-up. Check to see if the Server Manager application exists. Change
            the computer name to something such as &#40;Server2016&#41;. Optionally, you can adjust your OS to be set for best performance to decrease possible
            lag from here.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Installing Windows 10</h2>
          <h3 className="bg-white mt-12">Installing Windows 10 with ISO/Bootable USB</h3>
          <p>
            Download the ISO file from the Windows site for virtual machine use. This next step is important, listen carefully! Select “Create installation
            media &#40;USB, DVD, ISO&#41; for another PC”, otherwise you could mess up your computer. Check the recommended options. Choose the ISO file and put
            it in the downloads folder. Create a virtual box &#40;do not put the ISO in yet&#41;. Next, start up the virtual box and change to the Windows ISO
            you downloaded when it prompts for one. Next, hit install and you can click "I don't have a product key". Select Windows 10 Pro so you can add to
            the domain server later. Select custom installation and set up languages &#40;English, US&#41;. Choose keyboard layout for qwerty. Set up for
            personal use. Finally, create a user account. We will call it User.
          </p>
        </div>

        <div className="my-16">
          <h2 className="sub-heading">Active Directory Set Up</h2>
          <h3 className="bg-white mt-12">Active Directory domain services set up</h3>
          <p>
            Go to Windows Server 2016. Open up Server Manager. Click "Manage" and then next. Select "Role-based or feature-based installation...". Next, keep
            note of the Server IP address. Select "Active Directory domain servers" and hit "Add feature". Hit next and install. Click “promote the server to
            domain”. Select add a new forest. Create root domain name &#40;.org, .com, .local&#41;. Also, note that if putting it online, make sure that DNS
            isn't in use already. Next, click and create a password and NetBIOS name. Hit next until you get to install, click "Install" and then auto restart.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Chaning Computer Name</h2>
          <h3 className="bg-white mt-12">Changing computer name</h3>
          <p>
            Go to File Explorer. On older Windows versions you can quickly access File Explorer with "c:" in the Windows search menu. Right-click "ThisPC", go
            to properties, change settings, computer name, and hit change to change the computer name. After this, restart your computer/desktop.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">RSAT Tools Helpdesk Account</h2>
          <h3 className="bg-white mt-12">RSAT tools helpdesk account</h3>
          <p>
            Go to File Explorer, right-click "ThisPC" and hit "manage". Go to local users and groups, and click users. Right-click Administrator, and click
            Properties. Uncheck disable account, apply, and hit ok. Also, note that if an arrow is pointing down on the user account icon, this means the
            account is disabled. Right-click Administrator and set a password. Sign out, and sign in as Administrator. Go to File Explorer, right-click "ThisPC"
            and remove User. Sign out, sign in, and go to the start menu. Go to "add or remove programs".
            <br />
            <br />
            Select "optional features / add a feature". Give access to RSAT Tools: RSAT: Active Directory Certificate Services, RSAT: Active Directory Domain
            Services..., RSAT: DHCP Server Tools, RSAT: DNS Server Tools, RSAT: Group Policy Management Tools, RSAT: Remote Desktop Services Tools, RSAT: Server
            Manager. After selecting these RSAT Tools, hit install. Sign out, sign back in. On Windows Server 2016 go to the command line and type ipconfig to
            see IPV4. Change the name of the Windows 10 computer to something like desktop1. Install Chrome, search TeamViewer, and install. Ping to Windows
            Server 2016 IPV4 address. Hit Control Panel and View Network Status. Change adapter settings, select ethernet, and go to properties. Assign static
            IPV4 address while setting the subnet mask and default gateway to the same as the IP address for the Windows Server 2016 server.
            <br />
            <br />
            So, this translates to our Preferred DNS Server as our &#123;server IP address&#125;, and the Alternate DNS server as our &#123;default
            gateway&#125;. After, in the virtual box, select devices, select network, and choose host-only adapter. Ping the server again, and see if you get a
            response. Go to "ThisPC", right-click to select properties, change settings, select change, select domain, put the server's domain name, and then
            sign in with an Admin or Helpdesk account. After all this, restart. Check if desktop1 was added to the server by going to Active Directory and
            clicking Computers. Use a user account with administrative/helpdesk privileges through "Other user" on Windows 10 so we use a
            domain/server-connected account &#40;not a local account&#41;. Check if you have RSAT tools and Server Manager from that account. From here, if you
            want, you can pin Active Directory &#40;AD&#41; to the Windows taskbar.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Active Directory In Detail</h2>
          <h3 className="bg-white mt-12">Set up active directory users and computers</h3>
          <p>
            Go to Server Manager and click Tools. Click Active Directory Users and Computers. You can also pin Active Directory to the taskbar after
            right-clicking Active Directory if you choose to do so.
          </p>
          <h3 className="bg-white mt-12">Create new user in active directory</h3>
          <p>Go to Active Directory. Open the drop-down on the domain. Right-click "Users", hover over "New" and select "User".</p>
          <h3 className="bg-white mt-12">Copy user in active directory</h3>
          <p>
            Go to Active Directory. Open the drop-down on domain service. Go to "Users" or "Find" to find the user you are searching for to copy. Right-click
            the user icon, and click copy. You can also use this to quickly create another user that has similar or the same properties. This is faster than
            making the user and adding that user's properties from scratch.
          </p>
          <h3 className="bg-white mt-12">Searching for user, groups, computers in active directory</h3>
          <p>
            Right-click on the domain or another file. Confirm the find filter is set to "Entire directory". This will help you find things easier. Once you
            have what you are looking for, click Find Now.
          </p>
          <h3 className="bg-white mt-12">Advanced features search on active directory</h3>
          <p>
            When finding a user/group, it will state which folder they are a part of. Click the found user to bring up user properties. Go to "Object" and the
            location is in this format "&#123;domain&#125;/&#123;folder&#125;/&#123;sub folder&#125;.
          </p>
          <h3 className="bg-white mt-12">Enabling recycle bin in active directory</h3>
          <p>
            Go to the "Active Directory Administrative Center" application. Go to domain "&#123;domain service name&#125; &#40;local&#41;". Click "enable
            recycle bin", then hit ok. Hit the refresh button and "enable recycle bin" should be greyed out. Check to see if you have a "Deleted Objects"
            folder.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Command advanced with Organizational Unit &#40;OU&#41;</h2>
          <h3 className="bg-white mt-12">Comman advanced features invovled with OU</h3>
          <p>
            Open Server Manager. Create a user account through Active Directory. Create or put in an appropriate organizational unit. Grab the user and place it
            in the organizational unit. Go to view and select advanced features, then click on OU and double-click the user to see the Attribute Editor for
            general account info &#40;password expires, last set, principle name, etc&#41;. Right-click the user, go to all tasks, and hit the resultant set
            policy &#40;logging&#41;. Under computer selection, select another computer, browse, and then put in the &#40;helpdesk&#41; desktop name. Finish
            policy wizard setup. View policies set up on that computer.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Group Policy Management</h2>
          <h3 className="bg-white mt-12">Working with Group Policy Management &#40;GPO&#41;</h3>
          <p>
            Go to Server Manager, and click on tools. Hit Group Policy Management select default domain, and then settings. View policy information &#40;tip:
            take a screenshot of a policy that has to do with many accounts&#41;. If the account lockout threshold is zero &#40;0 invalid login attempts&#41;
            then change through the Group Policy Management editor so accounts don't get logged out on accident from the first attempt.
          </p>
          <h3 className="bg-white mt-12">Opening Group Policy Management editor</h3>
          <p>
            In Group Policy Management, right-click the default domain policy. Click edit, and it opens. Under policies and window settings, you have your
            Security Settings and these hold the account policies.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Common Commandline Commands</h2>
          <h3 className="bg-white mt-12">Common Commands used in the Windows command line</h3>
          <p>
            ipconfig: shows a general overview of your Windows IP Configuration, and displays the IP address, Subnet Mask, and Default Gateway for all adapters.
            ipconfig /all: Details of every network connection including your physical &#40;MAC&#41; address, DHCP connections, lease durations, and
            comprehensive IPv6 data will be provided. net use: shows shared drives the current user is connected to net user &#123;user&#125; /domain, can be
            used to create, delete, enable, or disable user accounts on the system and set passwords for network user accounts for the server. You may have to
            run as an administrator to use this. It can also be used to quickly check if the password for an account is about to expire.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Common Active Directory Issues</h2>
          <h3 className="bg-white mt-12">Common issues in active directory</h3>
          <p>
            The user gets locked out: go to the user's account in Active Directory, double-click the user’s account, and hit unlock &#40;this could be because
            of Outlook, VPN, mobile, computer, or being connected on more than two devices&#41;.
          </p>
          <p>Account disabled: go to the user account in Active Directory, double-click, select account, enable account, and reset password.</p>
          <p>
            Account expired: either the fix is changing the password in active directory for that account or to change the expiration date &#40;find account,
            double click it, go to account tab to do this&#41;. After this you can use "net user &#123;user account name&#125; /domain" in the command line to
            see if account settings are set right.
          </p>
          <p>
            Computer is disabled: if prompted "The security database on the server does not have a computer account for this workstation trust relationship", go
            to active directory, go to domain, go to computers and enable the computer/desktop.
          </p>
          <p>
            Computer fallen/deleted from domain: local users should still work but domain server accounts won't. Usually when trying to log in a message appears
            stating "The security database on the server does not have a computer account for this workstation trust relationship". In this case, ping the
            computer/desktop to see if it is on server. Log in as a local user whilst using &#40;..\administrator&#41;. Once logged in, go to "ThisPC", its
            properties, and go to change settings, change computer name settings, change to workgroup, press ok and restart. Log back in and go to computer name
            settings and set back to domain. Now go back to active directory and check if computer shows up &#40;may need to refresh&#41;.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Removing user after adding admin account to desktop with advanced system settings</h2>
          <h3 className="bg-white mt-12">
            Removing users after adding admin account to desktop with advanced system settings &#40;not AD&#41; and adding to domain
          </h3>
          <p>
            Go to file explorer, "ThisPC", and press manage. Go to local users and groups, users, and enable administrator account. Sign out of user account and
            sign in with admin account. Go to file explorer, ThisPC, right click for properties, click advanced system settings, go to users profiles settings,
            and delete the placeholder user account. Open control panel, view network status, and change the adapter settings. Set up static IP so you can
            connect to server form virtual environment. Through the virtual machine, go to devices, click network, and select the host-only adapter. Open
            command line and ping domain server &#40;should give a response&#41;. Within ThisPC go to advanced system settings, the properties tab, and change
            computer name settings. You make the admin account a member of the domain. Here you may be prompted for admin or helpdesk credentials. Now, you can
            check to see if desktop is added to comptuers in Active Directory. You should also check to see if you can log into another users account that is on
            the sersver.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Distribution vs. Security Group</h2>
          <h3 className="bg-white mt-12">Distribution groups</h3>
          <p>In a distribution group, everyone receives email / task that was sent out. The email may have to go through third-party services.</p>
          <h3 className="bg-white mt-12">Security groups</h3>
          <p>
            Security groups include things such as shared drive permissions, folder access, and VPN access. These ensure more security to enterprise server
            envinronments.
          </p>
        </div>

        <div className="my-16">
          <h2 className="sub-heading">Creating Security Groups, Shared Folders, Map Drives</h2>
          <h3 className="bg-white mt-12">Creatings shared groups, shared folders, map drives</h3>
          <p>
            Go to Server Manager. Go to file and storage services, shares, right click Server 2016 are, and click New Share. Hit next, and you hit next again
            unless you want to choose specific location. Give a share name &#40;usually same as some OU&#41;. Pay attention to \\&#123;server computer
            name&#125;\&#123;share name&#125;. Create share, go to view folder&#40;s&#41; in local disk or area where stored "shares" folder is. You can check
            to see if folders are shared through properties, and then sharing. Go to Active Directory, domain, users, right click add group &#40;make sure group
            type is security&#41;. If you want to know who approves that folder double click group and go to "managed by". Double click group and change
            "managed by" name using domain server account. Right click on share folder, select properties, put netowrk pathname "\\&#123;server computer
            name&#125;\&#123;share name&#125; &#40;share folder&#41;", then hit apply and ok. Double click group that is now associated with folder, click
            members, select add users. Go to share folder, properties, select sharing advanced sharing, disable inheritance, and "convert inherited permissions
            into explicit...". Make sure to always keep the admin account. Remove instances of "Users", click add, select principle, add helpdesk, add the group
            that has access to that folder with modify basic permissions. Apply and hit ok. Go to sharing, hit "share...", give group read/write permissions.
            Check to see if network pathname for file works on user account file explorer. Quick tip, if you want to shortcut the shared file, drag the file
            icon from the path search bar and put in quick access.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Network drives and mapping</h2>
          <h3 className="bg-white mt-12">How to map a netowrk drive on user computer</h3>
          <p>
            Find the network directory/file path you would like to map &#40;network folder looks like \\&#123;server computer name&#125;\&#123;share
            name&#125;&#41;. Copy it, right click "ThisPC", select map network drive and paste path in ":folder". Check reconnect at sign in and hit finish.
          </p>
          <h3 className="bg-white mt-12">How to map a network drive using server computer and active directory with own personal folder based on username</h3>
          <p>
            Go to "Shares" folder, right click share folder. Select properties, go to sharing tab, click security, see group for account, go back to sharing
            tab. Open active directory, go to group, find user, double click user, select profile. Copy netowrk path from "sharing" tab and paste network path
            "\\&#123;server computer name&#125;\&#123;share name&#125;" to "Home folder". Go to Connect: To: and add "\%username%" to end of path. Hit apply and
            ok.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Installing application on virtual machine</h2>
          <h3 className="bg-white mt-12">How to install applications on to virtual machine</h3>
          <p>
            On the virtual machine, go to devices, insert guest additions CD image. Go to "ThisPC", double click oracle VM VirtualBox guest additions. Hit
            install and then reboot. Right click folder icon on Virtual Box and select share folder. Make a new folder, click other from dropdown, and click
            downloads. Create new folder, select folder, auto mount, and select newly created folder. Right click on virtual machine cd and remove disk.
            Download application installation and put it in folder that is connected to virtual machine. Go to open that folder &#40;or refresh&#41; in virtual
            machine, and drag installation out of the folder onto desktop. Go to virtual machine devices, network settings, bridged adapter, click ok. Go to
            control panel, "view networks satatus...", change adapter settings, select properties, change back to DHCP through making IPv4 not static. Make sure
            you connected to the internet by using ping 8.8.8.8. Now you should be able to install applications.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">GPO and account policies</h2>
          <h3 className="bg-white mt-12">
            Removing, shut down and restart on GPO for people remoting in from home and accidently shutting down computers in office &#40;preventing them from
            logging back in to do work&#41;
          </h3>
          <p>
            Go to cmd line, gpupdate /force to update policy. You can also use gpresult /? for help. Use gpresult /r in command line. Go to server manager on
            server computer. Go to group policy management, find the domain name of your server. Right click group policy objects, select new, name this GPO
            "Task manager" and hit ok. Click Task manager GPO, go to the delegation tab, add the user that add your choosen user read permissions only. Right
            click Task Manager and go to Ctrl+Alt+Del Options. Enable remove change password and enable remove task maanger. Grab the GPO and drag it in OU you
            want it to be in. Rgith click GPO in OU and click enforced. At this point, these policies are automatically active. There is no need to re-log into
            account or reboot. On user computer you can use gpresult /r to see what applied GPOs there are on that account. You can still open task maanger
            through run as admin of the server, &#40;not helpdesk&#41;.
          </p>
          <h3 className="bg-white mt-12">Checking users account policy through GPO</h3>
          <p>
            Right click group policy results. Select "group policy wizard...", click next, browser, put user computer in, hit next, select your choosen user,
            and hit next until finished. Click choosen user on that users respective computer/machine. This will tell us the policy information with that users
            account. You can then delete item after you check.
          </p>
          <h3 className="bg-white mt-12">Checking users account policy through Active Directory</h3>
          <p>
            Go to Server manager. Next, go to Active directory users and computers. In group, right click the choosen user, hover over all task. Pull up RSOP
            &40;resultant set of policy wizard&#41;. Select another computer, browse, choose the users respective computer and hit next. Select specific user:
            &#123;server domain name&#125;\&#123;user&#125;, click next and finish. Now you can view what's going on with users computer policy.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">PDQ Deploy and Inventory</h2>
          <h3 className="bg-white mt-12">Deploying PDQ</h3>
          <p>
            Go to package library to get an application. Go to packages to view that application. Right click application, deploy once, choose targets through
            active directory computers, choose the server/domain and click ok. After that hit deploy now. The application you have just deployed should now be
            on the desktop you deployed it to. This can be used to install things on the backend without interrupting someone.
          </p>
          <h3 className="bg-white mt-12">PDQ Inventory, hardware inventory, applications</h3>
          <p>
            Install PDQ inventory from PDQ website. Open PDQ Inventory, right click user desktop, run report, go to shared folders, double click desktop. Click
            computer, view information on computer. Go to applications. Here it shows applications installed on a computer. Go to printers, here is shows
            printers. There are also more things you can view from here other than just printers and applications. Lets go to "Shares" and double click one of
            the user$. This will take you to desktop of user &#40;c$, users, &#123;user account&#125;&#41;. You can also add applications through here. With PDQ
            Inventory you can run commands in other computers, remote in desktops, reboot other computers, and more. You can run reports to print hardware
            information of computers. PDQ Inventory also has the ability to open PDQ deploy. The biggest use case for this would probably be the ability to run
            reports.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Printer setup on Microsoft Server 2016</h2>
          <h3 className="bg-white mt-12">Printer set up on Microsoft Server 2016</h3>
          <p>
            Open Server Manager, go to manage, go to "add role and featuers...", hit next until you react "check and print document services" &#40;add
            features&#41;. Select print server &#40;next & install&#41; and hit close. In Server Manager, go to tools, print management, right click printer
            space, and add printer. Typically you would give printer a static IP or DHCP reservation depending on the scale of your network environment. On
            local port, add a new printer using an existing port: and hit next. Install a new driver and click next. Select printer name, uncheck "share this
            printer" and click next until finished. Right click new printer, go to properties, go to the sharing tab. From here you can select the option of
            "list in the directory" and click apply if you want the printer to be findable in Active Directory. You can also view ports and device settings if
            you choose to. Now, click on the security tab and in advanced settings remove "everyone". After this you can add any authorized groups for that
            printer. This is important for printer security so not everybody knows who's printing what. Good for lawyers, compliance, HR, etc.If earlier you
            selected to list the printer in directory, you can go to Active Directory, right click domain, and search for the printer and find it. To check if a
            printer can be added on a users desktop go to control panel, view devices and printers, add printer, select the printer you want to add, hit next
            and finish. Check properties of printer if needed at this point. To troubleshoot printer access/drivers go to server manager, tools, printer
            management, right click printer, go to properties, access the sharing tab, and uncheck list in directory, click apply and ok. Next, go to
            properties, click advanced, click new drivers to update drivers, and re-list in directory after. It should be noted that cloud printer services are
            an easier option than this. If a company is looking for simple printer solutions, cloud printer services should be in consideration.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Tickets using Spiceworks and ticketing systems</h2>
          <h3 className="bg-white mt-12">Tickets using Spiceworks, RDP tools</h3>
          <p>
            Go to spiceworks, tools & apps, and click cloud helpdesk. From here you can create tickets. It is very important to understand ticket system levels
            &#40;ticket level&#41;. What you'll mostly be concerned about for helpdesk would be creating tickets, assigning tickets, and closing tickets. When
            closing a ticket just explain what you did to solve a problem. You can also search for old tickets to solve recurring issues.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Delegation control</h2>
          <h3 className="bg-white mt-12">Delegation control &#40;limited access on Active Directory&#41;</h3>
          <p>
            Go to Active Directory users and computers. Create a new user account and a password for that user account. Create new organization unit
            &#40;OU&#41; and drag your new user in there. Right click domain, hover over next, add your user, give them permission options, and click finish.
            You can confirm it worked by logging in as that user and seeing if options are grayed out based on delegation.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Account lcokout tool</h2>
          <h3 className="bg-white mt-12">Account lockout tool</h3>
          <p>
            Download account lockout tool. Use lockout tool andinstall it where you want. This tool is capable of telling you login/logout attempts and
            information. Select target, select a user, make sure you on the right domain. Now you can view login/logout information on users and see login
            attempts and use this to help you troubleshoot login/logout problems.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Quick performance adjustment &#40;windows&#41;</h2>
          <h3 className="bg-white mt-12">Quick performance adjustment</h3>
          <p>
            Go to file system - on older windows versions, you can do this with "c:" in windows start search bar. Right click "ThisPC", go to properties, go to
            advanced system settings, and click on the performance option. Now you can adjust for best performance based on memory usage, processor scheduling,
            and visual effects.
          </p>
        </div>
        <div className="my-16">
          <h2 className="sub-heading">Possible interview questions</h2>
          <h3 className="bg-white mt-12">Other user domain interview question</h3>
          <p>
            If told its a joined computer &#40;means it's connected to a server&#41; and it says on the login screen "Sign in to: &#123;DOMAIN NAME&#125;", then
            you know it is connected to a domain and has a local computer name as well. To further check you can click "How do I sign in to another domain?" and
            you will see "name\domain" & &#123;COMPUTER NAME&#125;\local.
          </p>
          <h3 className="bg-white mt-12">
            What's that feature that Server Manager has that containerizes users, computers, and organizational units &#40;OUs&#41;
          </h3>
          <p>Active directory users and computers.</p>
        </div>
      </div>
    </>
  );
};

export default HelpDeskLab;
