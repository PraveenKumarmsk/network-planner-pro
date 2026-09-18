# 🌐 Network Planner Pro

> A browser-based network planning and subnetting tool for IPv4, VLSM, routing, switching, and Cisco IOS configuration.

🔗 **Live Demo:**  
https://praveenkumarmsk.github.io/network-planner-pro/

![Network Topology](https://github.com/PraveenKumarmsk/network-planner-pro/blob/main/network-planner-images.png)
---

## 📌 About The Project

**Network Planner Pro** is a client-side network design and planning tool built to simplify common networking tasks such as:

- IPv4 subnetting
- VLSM address allocation
- IP address planning
- VLAN planning
- Routing protocol planning
- Switching feature planning
- Supernetting
- Subnet calculation
- Cisco IOS configuration generation

The tool allows users to enter a base network and network requirements, then generates an organized IP addressing plan and related networking information.

---

## 🚀 Features

### 🌐 IPv4 & VLSM

- IPv4 CIDR support
- VLSM subnet allocation
- Department/segment-based IP planning
- Network ID calculation
- Subnet mask calculation
- CIDR notation
- Usable IP range
- Broadcast address
- Gateway
- Wildcard mask
- Host requirement calculation

### 📊 IP Planning

The IP Plan provides information such as:

| Information |
|---|
| Department / Segment |
| VLAN |
| Network ID |
| Subnet Mask |
| CIDR |
| Usable IP Range |
| Broadcast Address |
| Gateway |
| Wildcard Mask |
| Remarks |

### 🔀 Routing

Supports planning for:

- RIP
- OSPF
- EIGRP
- BGP

Additional options include:

- Router ID
- BGP Edge Router
- Local AS
- Routing protocol selection

### 🔧 Switching

Switching features include:

- VTP
- STP / RSTP
- DTP
- EtherChannel
- Port Security
- HSRP / VRRP
- 802.1Q Trunking

### 📐 Supernetting

Includes a dedicated **Supernetting** section for network aggregation and address planning.

### 🧮 Subnet Calculator

Enter:

and calculate the subnet information.

🖥️ Main Sections

The application is organized into:
```
01 · IP Plan
02 · Topology
03 · Cisco Config
04 · Supernetting
05 · Subnet Calc
```
⚙️ How To Use
Step 1 – Enter Base Network

Example:
```
192.168.0.0/23
```
Step 2 – Select Routing Protocol

Choose the required protocol:
```
RIP
OSPF
EIGRP
BGP
```
Step 3 – Configure Switching Features

Select required features such as:
```
VTP
STP / RSTP
DTP
EtherChannel
Port Security
HSRP / VRRP
```
Step 4 – Add Network Requirements

Add departments or network segments and specify their host requirements.

Example:
```
HR       → 50 Hosts
Sales    → 100 Hosts
IT       → 30 Hosts
Accounts → 20 Hosts
```
Step 5 – Generate Network Plan

Click:
```
Generate / Refresh
```
The application generates the IP addressing plan.

### 🧠 VLSM Calculation

The application uses the standard IPv4 host calculation:

```Usable Hosts = 2^h − 2```

where:

```h = number of host bits```

Point-to-point networks can also use /31 addressing where applicable.

### 🛠️ Technologies Used
HTML5
CSS3
JavaScript
IPv4 Networking
CIDR
VLSM
Subnetting
Cisco IOS Concepts

### 💻 Project Type
Frontend Web Application
Client-Side Application
No Backend Required

All calculations and updates are performed in the browser.

### 🎯 Use Cases

This tool can be useful for:

CCNA students
Networking students
Network engineers
IT support professionals
NOC engineers
Network lab practice
IP address planning
Cisco Packet Tracer labs
GNS3 labs
Network documentation

### 📚 Networking Concepts Covered
IPv4
CIDR
Subnetting
VLSM
Supernetting
VLAN
VTP
STP
RSTP
DTP
EtherChannel
Port Security
HSRP
VRRP
RIP
OSPF
EIGRP
BGP
Cisco IOS

## ⚠️ Disclaimer

This tool is designed for network planning, learning, and lab purposes.

Always verify generated addressing and Cisco configurations before deploying them on production networks or physical devices.

### 🌐 Live Demo

👉 https://praveenkumarmsk.github.io/network-planner-pro/

### 👨‍💻 Author

Praveen Kumar

IT Operations & Technical Support
CCNA | Networking | Desktop Support

GitHub

https://github.com/PraveenKumarmsk

Portfolio

https://praveenkumarmsk.github.io/My_Profile_Portfolio/

### ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
