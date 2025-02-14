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
//	WebHelp 5.10.001
var gaProj=new Array();

gaProj[0]=new project("");

function setLangId(sLangId)
{
	gaProj[0].sLangId=sLangId;
}

function setDataPath(sPath)
{
	if(sPath.length!=0)
	{
		if(sPath.lastIndexOf("../../../../index.html")!=sPath.length-1)
			sPath+="../../../../index.html";
		gaProj[0].sDPath=sPath;	
	}
	else
		gaProj[0].sDPath="";
}

function addToc(sFile)
{
	gaProj[0].sToc=sFile;
}

function addIdx(sFile)
{
	gaProj[0].sIdx=sFile;
}

function addFts(sFile)
{
	gaProj[0].sFts=sFile;
}

function addGlo(sFile)
{
	gaProj[0].sGlo=sFile;
}

function addRemoteProject(sProjRelPath)
{
	if(sProjRelPath.lastIndexOf("../../../../index.html")!=sProjRelPath.length-1)
		sProjRelPath+="../../../../index.html";
	gaProj[gaProj.length]=new project(sProjRelPath);
}

function project(sPPath)
{
	this.sPPath=sPPath;
	this.sLangId="";
	this.sDPath="";
	this.sToc="";
	this.sIdx="";
	this.sFts="";
	this.sGlo="";
}

window.onload=window_OnLoad;

function window_OnLoad()
{
	gsName=document.location.href;
	gsName=_replaceSlash(gsName);
	var nPos=gsName.lastIndexOf("../../../../index.html");
	if(nPos!=-1)
		gaProj[0].sPPath=gsName.substring(0,nPos+1);
	else
		alert("Error in Loading navigation component. Please regenerate WebHelp.");
	patchPath(gaProj);
	if(parent&&parent!=this&& typeof(parent.putProjectInfo)=="function")
	{
		parent.putProjectInfo(gaProj);
	}
}

function patchPath(aProj)
{
	for(var i=1;i<aProj.length;i++)
	{
		aProj[i].sPPath=_getFullPath(gaProj[0].sPPath,aProj[i].sPPath);
	}
}