// Copyright © Antartica Org. All rights reserved. - United States
// SCRIPT STARTS
// LANGUAGE (en-US)

function homepageurlcommandscriptFunction() {
var url_string = location.href; 
var url = new URL(url_string);
var c = url.searchParams.get("c");
if (c == "detailedinformationpanel") {
alert("Antartica.Org\nDetailed Information Panel\n-------------------------------------\n\nApp Info\nApp Name: Antartica.Org\nFeature Name: Detailed Information Panel\n\n-------------------------------------\nCopyright © Antartica Org. All rights reserved. - United States");
window.location.replace("?c=0");
}
else {
}

}
// SCRIPT ENDS
// Copyright © Antartica Org. All rights reserved. - United States
