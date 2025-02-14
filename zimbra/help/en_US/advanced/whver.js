/*
 * ***** BEGIN LICENSE BLOCK *****
 *
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2008, 2009, 2010, 2012, 2014, 2015, 2016 Synacor, Inc.
 *
 * The contents of this file are subject to the Common Public Attribution License Version 1.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at: https://www.zimbra.com/license
 * The License is based on the Mozilla Public License Version 1.1 but Sections 14 and 15
 * have been added to cover use of software over a computer network and provide for limited attribution
 * for the Original Developer. In addition, Exhibit A has been modified to be consistent with Exhibit B.
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied.
 * See the License for the specific language governing rights and limitations under the License.
 * The Original Code is Zimbra Open Source Web Client.
 * The Initial Developer of the Original Code is Zimbra, Inc.  All rights to the Original Code were
 * transferred by Zimbra, Inc. to Synacor, Inc. on September 14, 2015.
 *
 * All portions of the code are Copyright (C) 2008, 2009, 2010, 2012, 2014, 2015, 2016 Synacor, Inc. All Rights Reserved.
 *
 * ***** END LICENSE BLOCK *****
 */
//	WebHelp 5.10.006
var gbNav=false;
var gbNav6=false;
var gbNav61=false;
var gbNav7=false;
var gbNav4=false;
var gbIE4=false;
var gbIE=false;
var gbIE5=false;
var gbIE55=false;
var gbOpera6=false;
var gbOpera7=false;
var gbKonqueror3=false;
var gbSafari3=false;

var gAgent=navigator.userAgent.toLowerCase();
var gbMac=(gAgent.indexOf("mac")!=-1);
var gbSunOS=(gAgent.indexOf("sunos")!=-1);
var gbUnixOS=(gAgent.indexOf("linux")!=-1) || (gAgent.indexOf("unix")!=-1);
var gbOpera=(gAgent.indexOf("opera")!=-1);
var gbKonqueror=(gAgent.indexOf("konqueror")!= -1);
var gbSafari=(gAgent.indexOf("safari")!= -1);
var gbWindows=((gAgent.indexOf('win')!= -1)||(gAgent.indexOf('16bit')!= -1));
var gbMozilla=((gAgent.indexOf('gecko')!=-1) && (gAgent.indexOf('netscape')==-1));
var gbAIR=(gAgent.indexOf('adobeair')!=-1);
var gbChrome = (gAgent.indexOf('chrome')!=-1);
var gbAIRSSL= false ;

var gVersion=navigator.appVersion.toLowerCase();

var gnVerMajor=parseInt(gVersion);
var gnVerMinor=parseFloat(gVersion);

if(!gbOpera&&!gbKonqueror&&!gbSafari) // opera can mimic IE or Netscape by settings.
{
	gbIE=(navigator.appName.indexOf("Microsoft")!=-1);
	gbNav=(gAgent.indexOf('mozilla')!=-1) && ((gAgent.indexOf('spoofer')==-1) && (gAgent.indexOf('compatible')==-1));
	if(gnVerMajor>=4)
	{
		if(navigator.appName=="Netscape")
		{
			gbNav4=true;
			if(gnVerMajor>=5)
				gbNav6=true;
		}
		gbIE4=(navigator.appName.indexOf("Microsoft")!=-1);
	}
	if(gbNav6)
	{
		var nPos=gAgent.indexOf("gecko");
		if(nPos!=-1)
		{
			var nPos2=gAgent.indexOf("../../../../index.html", nPos);
			if(nPos2!=-1)
			{
				var nVersion=parseFloat(gAgent.substring(nPos2+1));
				if(nVersion>=20010726)
				{
					gbNav61=true;
					if (nVersion>=20020823)
						gbNav7=true;
				}
			}
		}
	}else if(gbIE4)
	{
		var nPos=gAgent.indexOf("msie");
		if(nPos!=-1)
		{
			var nVersion=parseFloat(gAgent.substring(nPos+5));
			if(nVersion>=5)
			{
				gbIE5=true;
				if(nVersion>=5.5)
					gbIE55=true;
			}
		}
	}
}
else if (gbOpera)
{
	var nPos = gAgent.indexOf("opera");
	if(nPos!=-1)
	{
		var nVersion=parseFloat(gAgent.substring(nPos+6));
		if(nVersion>=6)
		{
			gbOpera6=true;
			if(nVersion>=7)
				gbOpera7=true;
		}
	}
}
else if (gbKonqueror)
{
	var nPos = gAgent.indexOf("konqueror");
	if(nPos!=-1)
	{
		var nVersion = parseFloat(gAgent.substring(nPos+10));
		if (nVersion >= 3)
		{
			gbKonqueror3=true;
		}
	}
}
if(gbSafari)
{
	var nPos = gAgent.indexOf("version/index.html");
	if(nPos!=-1)
	{
		var nVersion = parseFloat(gAgent.substring(nPos+8,nPos+9));
		if (nVersion >= 3)
		{
			gbSafari3=true;
		}
	}
}
if(gbChrome)
{
	//for the time being use same tests as safari
	gbSafari = true ;
	gbSafari3=true;
}
var gbWhVer=true;
