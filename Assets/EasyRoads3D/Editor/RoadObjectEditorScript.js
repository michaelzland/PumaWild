import System.Collections.Generic;
import System.IO;
import EasyRoads3D;
import EasyRoads3DEditor;
@CustomEditor(RoadObjectScript)
class RoadObjectEditorScript extends Editor
{
var counter : int;
var pe : float;
var tv : boolean;
var tvDone : boolean;
var debugDone : boolean;
var res : boolean;
var col : Collider;

function OnEnable(){

target.backupLocation = EditorPrefs.GetInt("ER3DbckLocation", 0);

if(target.extensionPath == ""){
OQOCDDCOQO.extensionPath = GetExtensionPath();
}
if(target.ODQQOCODOC == null){
OQDQDCQDCC();

var arr = ODCDDQQDDC.OCDOQDQCOQ(false);
target.OODQOODDCO(arr, ODCDDQQDDC.OCQCOCOODC(arr), ODCDDQQDDC.ODQQOQCDOC(arr));

OQDOQDODQO.CheckTerrainData(target.ODQQOCODOC);

target.OQQQOOOOCC = OCDOQOCDCC.OODCOCDCDD();
if(target.OQQQOOOOCC[0] == "None Available!") target.selectedWaterMaterial = 0;
else target.ODQQOCODOC.waterMaterial = OCDOQOCDCC.OOODQDQQOC(target.OQQQOOOOCC[target.selectedWaterMaterial]);
target.ODCCODOQQD = OCDOQOCDCC.OCDODCDQOC();
if(target.ODCCODOQQD[0] == "None Available!") target.selectedWaterScript = 0;




}

target.ODODQOQO = target.ODQQOCODOC.ODQOQCDCQC();
target.ODODQOQOInt = target.ODQQOCODOC.OQOQODOQQO();
if(target.splatmapLayer >= target.ODODQOQO.Length)target.splatmapLayer = 4;
if(target.customMesh != null){
if(target.customMesh.GetComponent(typeof(Collider))){
col = target.customMesh.GetComponent(typeof(Collider));
}else if(ODODOQDODD.terrain != null){
col = ODODOQDODD.terrain.GetComponent(typeof(TerrainCollider));
}
}else if(ODODOQDODD.terrain != null){
col = ODODOQDODD.terrain.GetComponent(typeof(TerrainCollider));
}

if(OQDQDCQDCC()){
ODODOQDODD.ODCOQODQQQ();
}
target.OCCCCCQQQDs = new GameObject[0];




}
function OnInspectorGUI(){

EasyRoadsGUIMenu(true, true, target);
}
function OnSceneGUI() {
if(target.ODQQOCODOC == null){
OQDQDCQDCC();

var arr = ODCDDQQDDC.OCDOQDQCOQ(false);
target.OODQOODDCO(arr, ODCDDQQDDC.OCQCOCOODC(arr), ODCDDQQDDC.ODQQOQCDOC(arr));

target.OQQQOOOOCC = OCDOQOCDCC.OODCOCDCDD();
if(target.OQQQOOOOCC[0] == "None Available!") target.selectedWaterMaterial = 0;
else target.ODQQOCODOC.waterMaterial = OCDOQOCDCC.OOODQDQQOC(target.OQQQOOOOCC[target.selectedWaterMaterial]);
target.ODCCODOQQD = OCDOQOCDCC.OCDODCDQOC();
if(target.ODCCODOQQD[0] == "None Available!") target.selectedWaterScript = 0;


if(target.OODDOCDODO != EditorApplication.currentScene && target.ODQQOCODOC == null){
OQQCCCOQCQ.terrainList.Clear();
target.OODDOCDODO = EditorApplication.currentScene;
}

}

OnScene();

}
function EasyRoadsGUIMenu(flag : boolean, senderIsMain : boolean,  nRoadScript : RoadObjectScript) : int {





if(target.OCOOQDQCQC && !Application.isPlaying && target.objectType < 2 && target.erInit !="" && (EditorPrefs.GetBool("ERv2isPlaying") || target.doRestore)){	

target.OOCCCDOOCQ[2] = true;
target.OCCCDQDOQC[2] = true;
target.doRestore = false;
EditorPrefs.SetBool("ERv2isPlaying", false);

target.OQQQODQDDQ(0.5f, true, false);

target.ODQQOCODOC.OOOQODOQQQ = OQOCDDCOQO.OODQDQQDQQ(target.ODQQOCODOC.OOOQODOQQQ, Directory.GetCurrentDirectory() + OQOCDDCOQO.backupFolder+ "/" + target.gameObject.name+ "/OCOOCCODQQ.backup");
target.ODQQOCODOC.restoreCall = true;

target.ODQQOCODOC.RoadODCQCDQCQO(1,0, "", true);
target.ODQQOCODOC.OCDDOOQQCO = target.RebuildObjs(); 
if(target.objectType == 1){

target.ODQQOCODOC.restoreCall = true;
target.OOOQDCCQDD();

SetWaterScript();

target.ODQQOCODOC.OCCODDDQCC = 0;

target.ODQQOCODOC.OQOQCQCDQO = true;
OQOOOCCDOO = new OQODDOODOD();
OQOOOCCDOO.l(true,0, new List.<Vector3>(), -1, 1f, target.ODQQOCODOC, 0);


target.ODQQOCODOC.RoadODCQCDQCQO(1,0, "", true);
}
if(!target.renderRoad) target.ODQQOCODOC.HideRoad();
target.ODQQOCODOC.restoreCall = false;

}


if(target.OOCCCDOOCQ == null || target.OCCCDQDOQC == null || target.OQCQDDCCCC == null || target.OOCCCDOOCQ.Length == 0 ){
target.OOCCCDOOCQ = new boolean[5];
target.OCCCDQDOQC = new boolean[5];
target.OQCQDDCCCC = nRoadScript;

target.OODDCOQCOO = target.ODQQOCODOC.OQDDQQODCO();
target.ODODQOQO = target.ODQQOCODOC.ODQOQCDCQC();
target.ODODQOQOInt = target.ODQQOCODOC.OQOQODOQQO();
}
origAnchor = GUI.skin.box.alignment;
if(target.ODCQCOODCC == null){
target.ODCQCOODCC = Resources.Load("ER3DSkin", GUISkin);
target.OQQOQQODDQ = Resources.Load("ER3DLogo", Texture2D);
}
if(!flag) target.OQCOOOQOOD();
if(target.OQOCDQDDOQ == -1) target.OCCCCCQQQD = null;
var origSkin : GUISkin = GUI.skin;
GUI.skin = target.ODCQCOODCC;
EditorGUILayout.Space();

EditorGUILayout.BeginHorizontal ();
GUILayout.FlexibleSpace();
target.OOCCCDOOCQ[0] = GUILayout.Toggle(target.OOCCCDOOCQ[0] ,new GUIContent("", " Add road markers. "),"AddMarkers",GUILayout.Width(40), GUILayout.Height(22));
if(target.OOCCCDOOCQ[0] == true && target.OCCCDQDOQC[0] == false) {
target.OQCOOOQOOD();
target.OOCCCDOOCQ[0] = true;  target.OCCCDQDOQC[0] = true;
}
target.OOCCCDOOCQ[1]  = GUILayout.Toggle(target.OOCCCDOOCQ[1] ,new GUIContent("", " Insert road markers. "),"insertMarkers",GUILayout.Width(40),GUILayout.Height(22));
if(target.OOCCCDOOCQ[1] == true && target.OCCCDQDOQC[1] == false) {
target.OQCOOOQOOD();
target.OOCCCDOOCQ[1] = true;  target.OCCCDQDOQC[1] = true;
}
target.OOCCCDOOCQ[2]  = GUILayout.Toggle(target.OOCCCDOOCQ[2] ,new GUIContent("", " Process the terrain and create road geometry. "),"terrain",GUILayout.Width(40),GUILayout.Height(22));

if(target.OOCCCDOOCQ[2] == true && (target.OCCCDQDOQC[2] == false || target.doTerrain)) {

if(target.markers <= 2){
EditorUtility.DisplayDialog("Alert", "A minimum of 2 road markers is required before the terrain can be leveled!", "Close");
target.OOCCCDOOCQ[2] = false;
}else{


flag = true;
if(target.objectType == 1) flag = target.CheckWaterHeights();


if(!flag){
EditorUtility.DisplayDialog("Alert", "The Unity Terrain Object does not accept height values < 0. The river floor will be equal or higher then the water level. Position all markers higher above the terrain!", "Close");
target.OOCCCDOOCQ[2] = false;
}else{
tvDone = false;
target.OQCOOOQOOD();
target.OOCCCDOOCQ[2] = true;  target.OCCCDQDOQC[2] = true;
target.OCOOQDQCQC = true;
target.doTerrain = false;
target.markerDisplayStr = "Show Markers";
if(target.objectType < 2){




#if UNITY_4_3

#else
Undo.RegisterUndo(ODODOQDODD.terrain.terrainData, "EasyRoads3D Terrain leveling");
#endif




if(!target.displayRoad){
target.displayRoad = true;
target.ODQQOCODOC.OQQCODDOQO(true, target.OCQDOCQQOC);
}

if(target.objectType == 2 && target.ODQQOCODOC.waterMaterial == null && target.OQQQOOOOCC[0] != "None Available!"){
target.ODQQOCODOC.waterMaterial = OCDOQOCDCC.OOODQDQQOC(target.OQQQOOOOCC[target.selectedWaterMaterial]);
}

OQQCCCOQCQ.ODOCDQDQCO = false;

ODQOCOCQCC(target);
if(target.OOQDOOQQ)target.OOOQDQDQDC();




if(target.objectType == 1){

SetWaterScript();
}
target.sosBuild = false;
if(target.autoODODDQQO && target.ODODDQOO.Length > 0){

ODQCOCOQQC(target);
}

}else{

target.ODQQOCODOC.OQOOOCQCCC(target.transform, false);
}
} 


if(target.applyTangents)OQQCCCOQCQ.OCDCCCOCDQ(target.ODQQOCODOC.road.GetComponent(typeof(MeshFilter)).sharedMesh);







}
}

target.OOCCCDOOCQ[3]  = GUILayout.Toggle(target.OOCCCDOOCQ[3] ,new GUIContent("", " General settings. "),"settings",GUILayout.Width(40),GUILayout.Height(22));
if(target.OOCCCDOOCQ[3] == true && target.OCCCDQDOQC[3] == false) {
target.OQCOOOQOOD();
target.OOCCCDOOCQ[3] = true;  target.OCCCDQDOQC[3] = true;
}
target.OOCCCDOOCQ[4]  = GUILayout.Toggle(target.OOCCCDOOCQ[4] ,new GUIContent("", "Version and Purchase Info"),"info",GUILayout.Width(40),GUILayout.Height(22));
if(target.OOCCCDOOCQ[4] == true && target.OCCCDQDOQC[4] == false) {
target.OQCOOOQOOD();
target.OOCCCDOOCQ[4] = true;  target.OCCCDQDOQC[4] = true;
}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
GUI.skin = null;
GUI.skin = origSkin;
target.OQOCDQDDOQ = -1;
for(var i : int  = 0; i < 5; i++){
if(target.OOCCCDOOCQ[i]){
target.OQOCDQDDOQ = i;
target.ODCDCODQOC = i;
}
}
if(target.OQOCDQDDOQ == -1) target.OQCOOOQOOD();
var markerMenuDisplay : int = 1;
if(target.OQOCDQDDOQ == 0 || target.OQOCDQDDOQ == 1) markerMenuDisplay = 0;
else if(target.OQOCDQDDOQ == 2 || target.OQOCDQDDOQ == 3 || target.OQOCDQDDOQ == 4) markerMenuDisplay = 0;

if(target.OCOOQDQCQC && !target.OOCCCDOOCQ[2] && Application.isPlaying){
EditorPrefs.SetBool("ERv2isPlaying", true);

}







if(target.OCOOQDQCQC && !target.OOCCCDOOCQ[2] && !Application.isPlaying && target.objectType < 2 && EditorPrefs.GetBool("ERv2isPlaying")){
target.OOCCCDOOCQ[2] = true;
target.OCCCDQDOQC[2] = true;
EditorPrefs.SetBool("ERv2isPlaying", false);

HandleUtility.Repaint();
}


if(target.OCOOQDQCQC && !target.OOCCCDOOCQ[2]){ 





target.OCOOQDQCQC = false;

if(target.objectType < 2 && !Application.isPlaying){




if(!target.doRestore || (target.doRestore && target.ODQQOCODOC.GetStatus())){



OCOOOQDOCQ(target);

ODCDDQQDDC.OQDOOQQCDD(target.transform);
target.markerDisplayStr = "Hide Markers";
res = true;


}else{


target.ODODDDOO = false;

OCOOOQDOCQ(target);
target.ODQQOCODOC.OQCCCOQDOO();
ODCDDQQDDC.OQDOOQQCDD(target.transform);
res = true;

}


target.OQQQODQDDQ(target.geoResolution, false, false);
SceneView.lastActiveSceneView.Repaint();


}else if(!Application.isPlaying){

target.ODQQOCODOC.OQOOOCQCCC(target.transform, true);
target.OODQDODOCC();
}else{

}




}
GUI.skin.box.alignment = TextAnchor.UpperLeft;
if(target.OQOCDQDDOQ >= 0 && target.OQOCDQDDOQ != 4){
if(target.OODDCOQCOO == null || target.OODDCOQCOO.Length == 0){

target.OODDCOQCOO = target.ODQQOCODOC.OQDDQQODCO();
target.ODODQOQO = target.ODQQOCODOC.ODQOQCDCQC();
target.ODODQOQOInt = target.ODQQOCODOC.OQOQODOQQO();
}
EditorGUILayout.BeginHorizontal();
GUILayout.Box(target.OODDCOQCOO[target.OQOCDQDDOQ], GUILayout.MinWidth(253), GUILayout.MaxWidth(1500), GUILayout.Height(50));
EditorGUILayout.EndHorizontal();
EditorGUILayout.Space();
}
if(target.OQOCDQDDOQ == -1 && target.OCCCCCQQQD != null) Selection.activeGameObject =  target.OCCCCCQQQD.gameObject;
GUI.skin.box.alignment = origAnchor;

if(target.erInit == "" || (OQQCCCOQCQ.debugFlag && !debugDone)){
debugDone = true;

target.erInit = OOCOQCQDCQ.OCQODCCQOQ(target.version); 
target.ODQQOCODOC.erInit = target.erInit;



this.Repaint();

}
if(target.erInit != "" && res){

target.OQQQODQDDQ(target.geoResolution, false, false);
res = false;
}
if(target.erInit.Length == 0){
}else if(target.OQOCDQDDOQ == 0 || target.OQOCDQDDOQ == 1){
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
if(GUILayout.Button ("Refresh Surfaces", GUILayout.Width(200))){
target.OOCDOCOCQC();
}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
}else if(target.OQOCDQDDOQ == 3){

GUI.skin.box.alignment = TextAnchor.MiddleLeft;
EditorGUILayout.BeginVertical("Box");
EditorGUILayout.LabelField("General Settings", EditorStyles.boldLabel);
EditorGUILayout.EndVertical();
if(target.objectType != 2){
GUILayout.Space(10);
var oldDisplay : boolean = target.displayRoad;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Display object", "This will activate/deactivate the road object transforms"), GUILayout.Width(125) );
target.displayRoad = EditorGUILayout.Toggle (target.displayRoad);
EditorGUILayout.EndHorizontal();
if(oldDisplay != target.displayRoad){
target.ODQQOCODOC.OQQCODDOQO(target.displayRoad, target.OCQDOCQQOC);
}
}

if(target.objectType < 2){

if(target.materialStrings == null){target.materialStrings = new String[2]; target.materialStrings[0] = "Diffuse Shader"; target.materialStrings[1] = "Transparent Shader"; }
if(target.materialStrings.Length == 0){target.materialStrings = new String[2]; target.materialStrings[0] = "Diffuse Shader"; target.materialStrings[1] = "Transparent Shader"; }
var cm : int = target.materialType;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Surface Material", "The material type used for the road surfaces."), GUILayout.Width(125) );
target.materialType = EditorGUILayout.Popup (target.materialType, target.materialStrings,   GUILayout.Width(115));
EditorGUILayout.EndHorizontal();
if(cm != target.materialType) target.ODQQOCODOC.OQOCCQOQDQ(target.materialType);
if(target.materialType == 1){
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("        Surface Opacity", "This controls the transparacy level of the surface objects."), GUILayout.Width(125) );
var so : float = target.surfaceOpacity;
target.surfaceOpacity = EditorGUILayout.Slider(target.surfaceOpacity, 0, 1,  GUILayout.Width(150));
EditorGUILayout.EndHorizontal();
if(so != target.surfaceOpacity) target.ODQQOCODOC.ODQOOQOQOC(target.surfaceOpacity);
}

}

EditorGUILayout.Space();
if(target.objectType < 2){
var od: boolean = target.multipleTerrains;

EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Multiple Terrains", "This will enable support for multiple terrains."), GUILayout.Width(125) );;
target.multipleTerrains = EditorGUILayout.Toggle (target.multipleTerrains);
EditorGUILayout.EndHorizontal();
if(od != target.multipleTerrains) target.ODQQOCODOC.multipleTerrains = target.multipleTerrains;
if(!target.multipleTerrains)GUI.enabled = false;
od = target.editRestore;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("            Restore", "Restore the selected terrain to its original state when returning to Edit Mode."), GUILayout.Width(125) );;
target.editRestore = EditorGUILayout.Toggle (target.editRestore);
EditorGUILayout.EndHorizontal();
if(od != target.editRestore) target.ODQQOCODOC.editRestore = target.editRestore;

}
GUI.enabled = true;

var cl = target.backupLocation;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Backup Location", "Use outside Assets folder unless you are using the asset server."), GUILayout.Width(125) );
target.backupLocation = EditorGUILayout.Popup (target.backupLocation, target.backupStrings,   GUILayout.Width(115));
EditorGUILayout.EndHorizontal();
if(target.backupLocation != cl){
if(target.backupLocation == 1){
if(EditorUtility.DisplayDialog("Backup Location", "Changing the backup location to inside the assets folder is only recommended when you want to synchronize EasyRoads3D backup files with the assetserver.\n\nWould you like to continue?", "Yes", "No")){
EditorPrefs.SetInt("ER3DbckLocation", target.backupLocation);
OQDOQDODQO.SwapFiles(target.backupLocation);
EditorUtility.DisplayDialog("Confirmation", "The backup location has been updated, all backup folders and files have been copied to the new location.\n\nUse CTRL+R to update the assets folder!", "Close");
}else target.backupLocation = 0;
}else{
if(EditorUtility.DisplayDialog("Backup Location", "The backup location will be changed to outside the assets folder.\n\nWould you like to continue?", "Yes", "No")){
EditorPrefs.SetInt("ER3DbckLocation", target.backupLocation);
OQDOQDODQO.SwapFiles(target.backupLocation);
EditorUtility.DisplayDialog("Confirmation", "The backup location has been updated, all backup folders and files have been copied to the new location.\n\nUse CTRL+R to update the assets folder!", "Close");
}else target.backupLocation = 1;
}
}

od = OQQCCCOQCQ.debugFlag;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Enable Debugging", "This will enable debugging."), GUILayout.Width(125) );;
OQQCCCOQCQ.debugFlag = EditorGUILayout.Toggle (OQQCCCOQCQ.debugFlag);
EditorGUILayout.EndHorizontal();
if(od != OQQCCCOQCQ.debugFlag && OQQCCCOQCQ.debugFlag) debugDone = false;




EditorGUILayout.Space();
EditorGUILayout.BeginVertical("Box");
EditorGUILayout.LabelField("Object Settings", EditorStyles.boldLabel);
EditorGUILayout.EndVertical();

if(target.objectType < 2){

EditorGUILayout.BeginHorizontal();
var wd : float = target.roadWidth;
if(target.objectType == 0)GUILayout.Label(new GUIContent("    Road width", "The width of the road") ,  GUILayout.Width(125));
else GUILayout.Label(new GUIContent("    River Width", "The width of the river") ,  GUILayout.Width(125));
target.roadWidth = EditorGUILayout.FloatField(target.roadWidth, GUILayout.Width(40) );
EditorGUILayout.EndHorizontal();
if(wd != target.roadWidth) target.OQQQODQDDQ(target.geoResolution, false, false);
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Default Indent", "The distance from the left and right side of the road to the part of the terrain levelled at the same height as the road"),  GUILayout.Width(125));
target.indent = EditorGUILayout.FloatField(target.indent, GUILayout.Width(40));
EditorGUILayout.EndHorizontal();
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Raise Markers", "This will raise the position of the markers (m)."), GUILayout.Width(125) );;
target.raiseMarkers = EditorGUILayout.FloatField (target.raiseMarkers, GUILayout.Width(40));
EditorGUILayout.EndHorizontal();
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Force Y Position", "When toggled on, ne road markers will inherit the y position of the previous marker."), GUILayout.Width(125) );;
target.forceY = EditorGUILayout.Toggle (target.forceY);
EditorGUILayout.EndHorizontal();
if(target.forceY){
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("        Y Change", "The marker will be raised / lowered according this amount for every 100 meters."), GUILayout.Width(125) );;
target.yChange = EditorGUILayout.FloatField (target.yChange, GUILayout.Width(40));
EditorGUILayout.EndHorizontal();
}
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Surrounding", "This represents the distance over which the terrain will be gradually leveled to the original terrain height"),  GUILayout.Width(125));
target.surrounding = EditorGUILayout.FloatField(target.surrounding, GUILayout.Width(40));
EditorGUILayout.EndHorizontal();

if(target.objectType == 1){
wd = target.waterLevel;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    River Bank Height", "This represents the minimum height difference between the water surface and the river bank. Increase this value when the river surface pops through the river bank"),  GUILayout.Width(125));
target.waterLevel = EditorGUILayout.FloatField(target.waterLevel, GUILayout.Width(40));
EditorGUILayout.EndHorizontal();
if(wd != target.waterLevel)target.OQQQODQDDQ(target.geoResolution, false, false);
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Floor Depth", "This represents the default depth of the river. Depths can be adjusted afterwards for each marker individually"),  GUILayout.Width(125));
target.floorDepth = EditorGUILayout.FloatField(target.floorDepth, GUILayout.Width(40));
EditorGUILayout.EndHorizontal();
var m : int = target.selectedWaterMaterial;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Material", ""), EditorStyles.label, GUILayout.Width(125));
target.selectedWaterMaterial = EditorGUILayout.Popup (target.selectedWaterMaterial, target.OQQQOOOOCC ,   GUILayout.Width(115) );
EditorGUILayout.EndHorizontal();
if(m != target.selectedWaterMaterial) target.ODQQOCODOC.waterMaterial = OCDOQOCDCC.OOODQDQQOC(target.OQQQOOOOCC[target.selectedWaterMaterial]);
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Script", ""), EditorStyles.label, GUILayout.Width(125));
target.selectedWaterScript = EditorGUILayout.Popup (target.selectedWaterScript, target.ODCCODOQQD ,   GUILayout.Width(115) );
EditorGUILayout.EndHorizontal();
}


}


if(target.objectType == 2){
var oldSnapY : boolean = target.snapY;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Snap to Terrain", "This will snap the object to the terrain"), GUILayout.Width(125) );
target.snapY = EditorGUILayout.Toggle (target.snapY);
EditorGUILayout.EndHorizontal();
if(oldSnapY != target.snapY){
target.ODQQOCODOC.snapY = target.snapY;
ODQCOCOQQC(target);
}
var ctm : GameObject = target.customMesh;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Mesh Surface", "To use a mesh as the target surface instead of a terrain object, drag the mesh to this slot"), GUILayout.Width(125));
target.customMesh = EditorGUILayout.ObjectField(target.customMesh, typeof(GameObject), true,  GUILayout.Width(100));
EditorGUILayout.EndHorizontal();
if(ctm != target.customMesh && target.customMesh != null){
if(target.customMesh.GetComponent("EasyRoads3DTerrainID")) target.customMesh.AddComponent("EasyRoads3DTerrainID");
}
}

var OldClosedTrack : boolean = target.OOQDOOQQ;
EditorGUILayout.BeginHorizontal();
if(target.objectType == 0)GUILayout.Label(new GUIContent("    Closed Track", "This will connect the 'start' and 'end' of the road"), GUILayout.Width(125) );
else if(target.objectType == 1)GUILayout.Label(new GUIContent("    Closed River", "This will connect the 'start' and 'end' of the river"), GUILayout.Width(125) );
else GUILayout.Label(new GUIContent("    Closed Object", "This will connect the 'start' and 'end' of the object"), GUILayout.Width(125) );
target.OOQDOOQQ = EditorGUILayout.Toggle (target.OOQDOOQQ);
EditorGUILayout.EndHorizontal();
if(OldClosedTrack != target.OOQDOOQQ){
target.OOCDOCOCQC();

if(target.objectType == 2)ODQCOCOQQC(target);
}

EditorGUILayout.BeginHorizontal();
OldClosedTrack = target.iOS;
GUILayout.Label(new GUIContent("    iOS Platform", "This will prepare the road mesh for the iOS Platform"), GUILayout.Width(125) );
target.iOS = EditorGUILayout.Toggle (target.iOS);
EditorGUILayout.EndHorizontal();
if(OldClosedTrack != target.iOS){
target.ODQQOCODOC.iOS = target.iOS;
target.OOCDOCOCQC();

if(target.objectType == 2)ODQCOCOQQC(target);
}

EditorGUILayout.Space();
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Geometry Resolution", "The polycount of the generated surfaces. It is recommended to use a low resolution while creating the road. Use the maximum resolution when processing the final terrain."), GUILayout.Width(125) );
var gr : float = target.geoResolution;
target.geoResolution = EditorGUILayout.Slider(target.geoResolution, 0.5, 5,  GUILayout.Width(150));
EditorGUILayout.EndHorizontal();
if(gr != target.geoResolution) target.OQQQODQDDQ(target.geoResolution, false, false);
EditorGUILayout.BeginHorizontal();
OldClosedTrack = target.iOS;

GUILayout.Label(new GUIContent("    Tangents", "This will automatically calculate mesh tangents data required for bump mapping. Note that this will take a little bit more processing time."), GUILayout.Width(125) );
target.applyTangents = EditorGUILayout.Toggle (target.applyTangents);
EditorGUILayout.EndHorizontal();

EditorGUILayout.Space();

if(target.objectType < 2){

EditorGUILayout.BeginVertical("Box");
EditorGUILayout.LabelField("Render Settings", EditorStyles.boldLabel);
EditorGUILayout.EndVertical();

if(ODODOQDODD.selectedTerrain == null)ODODOQDODD.ODCOQODQQQ();
var st : int = ODODOQDODD.selectedTerrain;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Active Terrain", "The terrain that will be updated"), GUILayout.Width(125) );
ODODOQDODD.selectedTerrain = EditorGUILayout.Popup (ODODOQDODD.selectedTerrain, ODODOQDODD.terrainStrings,   GUILayout.Width(115));
EditorGUILayout.EndHorizontal();
if(st != ODODOQDODD.selectedTerrain)ODODOQDODD.OQOCCCODQD();

EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Update Vegetation", "When toggled on tree and detail objects near the road will be removed when rendering the terrain."), GUILayout.Width(125) );;
target.handleVegetation = EditorGUILayout.Toggle (target.handleVegetation);
EditorGUILayout.EndHorizontal();
if(target.handleVegetation){

EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("      Tree Distance (m)", "The distance from the left and the right of the road up to which terrain trees should be removed."), GUILayout.Width(125) );
var tr : float = target.OODOCOQQQQ;
target.OODOCOQQQQ = EditorGUILayout.Slider(target.OODOCOQQQQ, 0, 25,  GUILayout.Width(150));
EditorGUILayout.EndHorizontal();
if(tr != target.OODOCOQQQQ) target.ODQQOCODOC.OODOCOQQQQ = target.OODOCOQQQQ;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("      Detail Distance (m)", "The distance from the left and the right of the road up to which terrain detail opbjects should be removed."), GUILayout.Width(125) );
tr = target.OQDQODQQDC;
target.OQDQODQQDC = EditorGUILayout.Slider(target.OQDQODQQDC, 0, 25,  GUILayout.Width(150));
EditorGUILayout.EndHorizontal();
if(tr != target.OQDQODQQDC) target.ODQQOCODOC.OQDQODQQDC = target.OQDQODQQDC;

}

EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Auto Create Side Objects", "When toggled on active side objects will be created automatically after processing the terrain."), GUILayout.Width(170) );;
target.autoODODDQQO = EditorGUILayout.Toggle (target.autoODODDQQO);
EditorGUILayout.EndHorizontal();


}

EditorGUILayout.Space();



EditorGUILayout.BeginVertical("Box");
EditorGUILayout.LabelField("Active Side Objects", EditorStyles.boldLabel);
EditorGUILayout.EndVertical();
if(RoadObjectScript.ODODOQQO == null){
var arr = ODCDDQQDDC.OCDOQDQCOQ(false);
RoadObjectScript.ODODOQQO = ODCDDQQDDC.OCQCOCOODC(arr);
}
if(target.ODODQQOD == null || target.ODODQQOD.Length == 0){
target.ODODQQOD = new boolean[RoadObjectScript.ODODOQQO.Length];
for(i=0;i<target.ODODQQOD.Length;i++) target.ODODQQOD[i] = true;
}
if(RoadObjectScript.ODODQOOQ == null){
arr = ODCDDQQDDC.OCDOQDQCOQ(false);
target.OODQOODDCO(arr, ODCDDQQDDC.OCQCOCOODC(arr), ODCDDQQDDC.ODQQOQCDOC(arr));
}
if(target.ODODQQOD.Length != RoadObjectScript.ODODQOOQ.Length){
arr = ODCDDQQDDC.OCDOQDQCOQ(false);
target.OODQOODDCO(arr, ODCDDQQDDC.OCQCOCOODC(arr), ODCDDQQDDC.ODQQOQCDOC(arr));
}
for(i=0;i<target.ODODQQOD.Length;i++){
EditorGUILayout.BeginHorizontal();
GUILayout.Label("      " + RoadObjectScript.ODODQOOQ[i], GUILayout.Width(175) );
target.ODODQQOD[i] = EditorGUILayout.Toggle (target.ODODQQOD[i]);
EditorGUILayout.EndHorizontal();
}
if(GUI.changed){
target.OQQQQQCCDD();
if(target.objectType == 2)ODQCOCOQQC(target);

}

}else if(target.OQOCDQDDOQ == 2){


if(target.objectType == 2){

EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
if(GUILayout.Button ("Save Object Geometry", GUILayout.Width(175))){
ODCDDQQDDC.ODQDDQDOQC(target.transform, target.OOQQQOQO);
Debug.Log("Side object geometry succesfully saved");
}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
EditorGUILayout.Space();
return;
}
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
if(GUILayout.Button (target.markerDisplayStr, GUILayout.Width(175))){
if(target.markerDisplayStr == "Hide Markers"){
target.ODQQOCODOC.OQOOOCQCCC(target.transform, false);
target.markerDisplayStr = "Show Markers";
}else{
target.ODQQOCODOC.OQOOOCQCCC(target.transform, true);
target.markerDisplayStr = "Hide Markers";
}
}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();

EditorGUILayout.Space();
EditorGUILayout.BeginVertical("Box");
if(target.objectType == 0)EditorGUILayout.LabelField("Road Settings", EditorStyles.boldLabel);
else EditorGUILayout.LabelField("River Settings", EditorStyles.boldLabel);
EditorGUILayout.EndVertical();
GUILayout.Space(10);
var oldRoad : boolean = target.renderRoad;
var oldRoadResolution : float = target.roadResolution;
var oldRoadUV : float = target.tuw;
var oldRaise : float = target.raise;
var oldSegments : int = target.OdQODQOD;
var oldOOQQQDOD : float = target.OOQQQDOD;
var oldOOQQQDODOffset : float = target.OOQQQDODOffset;
var oldOOQQQDODLength : float = target.OOQQQDODLength;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Render"," When active, terrain matching road geometry will be created."), GUILayout.Width(105) );
target.renderRoad = EditorGUILayout.Toggle (target.renderRoad);
EditorGUILayout.EndHorizontal();
if(target.renderRoad){
if(target.objectType == 0){
if(target.roadTexture == null){
mat = Resources.Load("roadMaterial", typeof(Material));
target.roadTexture = mat.mainTexture;
}

EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Material"," The road texture."), GUILayout.Width(105) );
if(GUILayout.Button (target.roadTexture, GUILayout.Width(75), GUILayout.Height(75))){

ERTextureWindow.Init(target);
GUIUtility.ExitGUI();

}
EditorGUILayout.EndHorizontal();

}
if(target.objectType == 0){
GUILayout.Space(10);
if(target.OOQDOOQQ){
GUI.enabled = false;
if(target.blendFlag){
target.blendFlag = false;
}
}
var bf = target.blendFlag;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Blend the start and / or end"," When active, the start and / or end of the road will blend with the terrain according the below settings."), GUILayout.Width(175) );
target.blendFlag = EditorGUILayout.Toggle (target.blendFlag);
EditorGUILayout.EndHorizontal();
if(target.blendFlag != bf)target.ODQQOCODOC.blendFlag = target.blendFlag; 
if(target.blendFlag && !bf){
if(target.startBlendDistance > 0)OQQCCCOQCQ.FadeBlend(0, target.startBlendDistance, target.ODQQOCODOC.road.GetComponent(typeof(MeshFilter)).sharedMesh, target.ODQQOCODOC.OdQODQOD);
if(target.endBlendDistance > 0)OQQCCCOQCQ.FadeBlend(1, target.endBlendDistance, target.ODQQOCODOC.road.GetComponent(typeof(MeshFilter)).sharedMesh, target.ODQQOCODOC.OdQODQOD);
}else if(!target.blendFlag && bf){
OQQCCCOQCQ.ResetBlend(target.ODQQOCODOC.road.GetComponent(typeof(MeshFilter)).sharedMesh);
}
if(!target.blendFlag)GUI.enabled = false;
var bd = target.startBlendDistance;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("   Start Distance"," The distance over which the road will be blended with terrain at the start."), GUILayout.Width(100) );
target.startBlendDistance = EditorGUILayout.Slider(target.startBlendDistance, 0, 20,  GUILayout.Width(175));
EditorGUILayout.EndHorizontal();
if(bd != target.startBlendDistance){
target.ODQQOCODOC.startBlendDistance = target.startBlendDistance;
if(target.startBlendDistance > 0)OQQCCCOQCQ.FadeBlend(0, target.startBlendDistance, target.ODQQOCODOC.road.GetComponent(typeof(MeshFilter)).sharedMesh, target.ODQQOCODOC.OdQODQOD);
if(target.endBlendDistance > 0)OQQCCCOQCQ.FadeBlend(1, target.endBlendDistance, target.ODQQOCODOC.road.GetComponent(typeof(MeshFilter)).sharedMesh, target.ODQQOCODOC.OdQODQOD);
}
bd = target.endBlendDistance;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("   End Distance"," The distance over which the road will be blended with terrain at the end."), GUILayout.Width(100) );
target.endBlendDistance = EditorGUILayout.Slider(target.endBlendDistance, 0, 20,  GUILayout.Width(175));
EditorGUILayout.EndHorizontal();
if(bd != target.endBlendDistance){
target.ODQQOCODOC.endBlendDistance = target.endBlendDistance;
if(target.startBlendDistance > 0)OQQCCCOQCQ.FadeBlend(0, target.startBlendDistance, target.ODQQOCODOC.road.GetComponent(typeof(MeshFilter)).sharedMesh, target.ODQQOCODOC.OdQODQOD);
if(target.endBlendDistance > 0)OQQCCCOQCQ.FadeBlend(1, target.endBlendDistance, target.ODQQOCODOC.road.GetComponent(typeof(MeshFilter)).sharedMesh, target.ODQQOCODOC.OdQODQOD);
}
GUI.enabled = true;
GUILayout.Space(10);
}
EditorGUILayout.BeginHorizontal();

if(target.objectType == 0)GUILayout.Label(new GUIContent(" Road Segments"," The number of segments over the width of the road."), GUILayout.Width(105) );
else GUILayout.Label(new GUIContent(" River Segments"," The number of segments over the width of the river."), GUILayout.Width(105) );



target.OdQODQOD = EditorGUILayout.IntSlider(target.OdQODQOD, 1, 10,  GUILayout.Width(175));

EditorGUILayout.EndHorizontal();
if(target.OdQODQOD > 1){
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Bumpyness"," The bumypness of the surface of the road."), GUILayout.Width(95) );
target.OOQQQDOD = EditorGUILayout.Slider(target.OOQQQDOD, 0, 1,  GUILayout.Width(175));
EditorGUILayout.EndHorizontal();
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Bumpyness Offset"," The bumypness variation of the road."), GUILayout.Width(95) );
target.OOQQQDODOffset = EditorGUILayout.Slider(target.OOQQQDODOffset, 0, 1,  GUILayout.Width(175));
EditorGUILayout.EndHorizontal();
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Bumpyness Density"," The bumypness density on the road."), GUILayout.Width(95) );
target.OOQQQDODLength = EditorGUILayout.Slider(target.OOQQQDODLength, 0.01, 1,  GUILayout.Width(175));
EditorGUILayout.EndHorizontal();
}

EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Resolution"," The resolution level of the road geometry."), GUILayout.Width(95) );
target.roadResolution = EditorGUILayout.IntSlider(target.roadResolution, 1, 10,  GUILayout.Width(175));
EditorGUILayout.EndHorizontal();

if(target.objectType == 0){
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" UV Mapping"," Use the slider to control texture uv mapping of the road geometry."), GUILayout.Width(95) );
target.tuw = EditorGUILayout.Slider(target.tuw, 1, 30,  GUILayout.Width(175));
EditorGUILayout.EndHorizontal();
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Raise (cm)","Optionally increase this setting when parts of the terrain stick through the road geometry. It is recommended to adjust these areas using the terrain tools!"), GUILayout.Width(95) );
target.raise = EditorGUILayout.Slider(target.raise, 0, 100, GUILayout.Width(175));
EditorGUILayout.EndHorizontal();
GUILayout.Space(10);
}else{

m = target.selectedWaterMaterial;
var mF : boolean = false;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Material", ""), EditorStyles.label, GUILayout.Width(125));
target.selectedWaterMaterial = EditorGUILayout.Popup (target.selectedWaterMaterial, target.OQQQOOOOCC ,   GUILayout.Width(115) );
EditorGUILayout.EndHorizontal();
if(m != target.selectedWaterMaterial){
target.ODQQOCODOC.waterMaterial = OCDOQOCDCC.OOODQDQQOC(target.OQQQOOOOCC[target.selectedWaterMaterial]);
if(target.OQQQOOOOCC[target.selectedWaterMaterial] == "Water3")  target.selectedWaterScript = 2;
mF = true;
SceneView.lastActiveSceneView.Repaint();
}
m = target.selectedWaterScript;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Script", ""), EditorStyles.label, GUILayout.Width(125));
target.selectedWaterScript = EditorGUILayout.Popup (target.selectedWaterScript, target.ODCCODOQQD ,   GUILayout.Width(115) );
EditorGUILayout.EndHorizontal();
if(m != target.selectedWaterScript){
if(target.selectedWaterScript == 2){
for(w=0;w<target.OQQQOOOOCC.length;w++)if(target.OQQQOOOOCC[w] == "Water3")target.selectedWaterMaterial = w;
target.ODQQOCODOC.waterMaterial = OCDOQOCDCC.OOODQDQQOC(target.OQQQOOOOCC[target.selectedWaterMaterial]);

}

if(m == 2)target.selectedWaterMaterial = 0;
SceneView.lastActiveSceneView.Repaint();
mF = true;
}


if(target.ODCCODOQQD[target.selectedWaterScript] == "Water3"){
wv = target.waveHeight;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("    Wave Height"," The height of the waves in metres."), GUILayout.Width(95) );
target.waveHeight = EditorGUILayout.Slider(target.waveHeight, 0, 3,  GUILayout.Width(175));
EditorGUILayout.EndHorizontal();
if(wv != target.waveHeight){


if(target.objectType == 1){
SetWaveHeight();
}
}
}

}
GUILayout.Space(5);

if(target.applyTangents)GUI.enabled = false;
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
if(GUILayout.Button ("Calculate Tangents", GUILayout.Width(175))){

OQQCCCOQCQ.OCDCCCOCDQ(target.ODQQOCODOC.road.GetComponent(typeof(MeshFilter)).sharedMesh);

}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
GUI.enabled = true;

EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
if(GUILayout.Button ("Save Geometry", GUILayout.Width(175))){
target.OQDOCDOCOQ();
Debug.Log("Road object geometry saved");
}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
EditorGUILayout.Space();
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
if(GUILayout.Button ("Finalize Object", GUILayout.Width(175))){
var bflag = false;
for(i=0;i<target.ODODQQOD.Length;i++){
if(target.ODODQQOD[i]){
bflag = true;
break;
}
}
if(target.autoODODDQQO || target.sosBuild == true)bflag = false;
if(EditorUtility.DisplayDialog("Important!", "This will unlink the road from the EasyRoads3D editor object and the EasyRoads3D object will be destroyed!\n\nWould you like to continue?", "Yes", "No")){
if(bflag){
if(EditorUtility.DisplayDialog("Important!", "This object includes activated side objects that have not yet been build!\n\nAre you sure you would you like to continue?", "Yes", "No")){
bflag = false;
}
}
if(!bflag){
target.ODQQOCODOC.FinalizeObject(target.gameObject);
DestroyImmediate(target.gameObject);
}
}
}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();

}
EditorGUILayout.Space();

if(oldRoad != target.renderRoad || oldRoadResolution != target.roadResolution || oldRoadUV != target.tuw || oldRaise != target.raise || oldSegments != target.OdQODQOD || target.OOQQQDOD != oldOOQQQDOD || target.OOQQQDODOffset != oldOOQQQDODOffset || target.OOQQQDODLength != oldOOQQQDODLength || mF){



target.OOOQDCCQDD();


if(target.objectType == 1) SetWaterScript();

}
EditorGUILayout.BeginVertical("Box");
EditorGUILayout.LabelField("Terrain Settings", EditorStyles.boldLabel);
EditorGUILayout.EndVertical();
GUILayout.Space(5);
var oldApplySplatmap : boolean = target.applySplatmap;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Apply Splatmap"," When active, the road will be added to the terrain splatmap. The quality highly depends on the terrain Control Texture Resolution size."), GUILayout.Width(125) );
target.applySplatmap = EditorGUILayout.Toggle (target.applySplatmap);
EditorGUILayout.EndHorizontal();
if(target.applySplatmap){
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Terrain texture", "This represents the terrain texture which will be used for the road spatmap."), GUILayout.Width(125) );
target.splatmapLayer = EditorGUILayout.IntPopup (target.splatmapLayer, target.ODODQOQO, target.ODODQOQOInt,   GUILayout.Width(120));
EditorGUILayout.EndHorizontal();
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Expand"," Use this setting to increase the size of the splatmap."), GUILayout.Width(125) );
target.expand = EditorGUILayout.IntSlider(target.expand,0, 3, GUILayout.Width(175));
EditorGUILayout.EndHorizontal();
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Smooth Level"," Use this setting to blur the road splatmap for smoother results."), GUILayout.Width(125) );
target.splatmapSmoothLevel = EditorGUILayout.IntSlider (target.splatmapSmoothLevel, 0, 3,  GUILayout.Width(175));
EditorGUILayout.EndHorizontal();
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Offset x"," Moves the road splatmap in the x direction."), GUILayout.Width(125) );
target.offsetX = EditorGUILayout.IntField (target.offsetX, GUILayout.Width(50));
EditorGUILayout.EndHorizontal();
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Offset y"," Moves the road splatmap in the y direction."), GUILayout.Width(125) );
target.offsetY= EditorGUILayout.IntField (target.offsetY, GUILayout.Width(50));
EditorGUILayout.EndHorizontal();
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Opacity","Use this setting to blend the road splatmap with the terrain splatmap."), GUILayout.Width(125) );
target.opacity = EditorGUILayout.Slider (target.opacity, 0, 1,  GUILayout.Width(175));
EditorGUILayout.EndHorizontal();
GUILayout.Space(5);
GUI.enabled = target.ODCQQDDCOQ;
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
if(GUILayout.Button ("Apply Changes", GUILayout.Width(175))){
target.OOOQDQDQDC();

if(target.OOQDOOQQ)target.OOOQDQDQDC();

if(target.objectType == 1) SetWaterScript();

target.ODCQQDDCOQ = false;
}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
}
GUILayout.Space(5);
if(oldApplySplatmap != target.applySplatmap){
target.OOOQDQDQDC();

if(target.OOQDOOQQ)target.OOOQDQDQDC();

if(target.objectType == 1) SetWaterScript();		
}
GUI.enabled = true;
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Terrain Smoothing:", "This will smoothen the terrain near the surface edges according the below distance."), GUILayout.Width(175) );
EditorGUILayout.EndHorizontal();
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Edges (m)","This represents the smoothen distance."), GUILayout.Width(125) );
target.smoothDistance = EditorGUILayout.Slider (target.smoothDistance, 0, 5,  GUILayout.Width(175));
EditorGUILayout.EndHorizontal();
GUILayout.Space(5);
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
if(GUILayout.Button ("Update Edges", GUILayout.Width(175))){

#if UNITY_4_3

#else
Undo.RegisterUndo(ODODOQDODD.terrain.terrainData, "EasyRoads3D Terrain smooth");
#endif
target.ODQQOCODOC.ODOCDQCOQQ(target.smoothDistance, 0);

if(target.objectType == 1) SetWaterScript(); 	
}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent(" Surrounding (m)","This represents the smoothen distance."), GUILayout.Width(125) );
target.smoothSurDistance = EditorGUILayout.Slider (target.smoothSurDistance, 0, 15,  GUILayout.Width(175));
EditorGUILayout.EndHorizontal();
GUILayout.Space(5);
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
if(GUILayout.Button ("Update Surrounding", GUILayout.Width(175))){

#if UNITY_4_3

#else
Undo.RegisterUndo(ODODOQDODD.terrain.terrainData, "EasyRoads3D Terrain smooth");
#endif
target.ODQQOCODOC.ODOCDQCOQQ(target.smoothSurDistance, 1);

if(target.objectType == 1) SetWaterScript();	
}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
EditorGUILayout.Space();

EditorGUILayout.BeginVertical("Box");
EditorGUILayout.LabelField("Side Objects Settings", EditorStyles.boldLabel);
EditorGUILayout.EndVertical();
GUILayout.Space(5);
if(target.ODODOQQO.Length > 0){
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
if(!target.ODODDDOO){
if(GUILayout.Button ("Build Side Objects", GUILayout.Width(175))){
ODQCOCOQQC(target);

}
}else{
if(GUILayout.Button ("Remove Side Objects", GUILayout.Width(175))){
ODCDDQQDDC.OQDOOQQCDD(target.transform);

target.ODODDDOO = false;
}
}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
EditorGUILayout.Space();
if(target.ODODDDOO){
}
}else{
GUILayout.Label(new GUIContent(" No side objects available",""), GUILayout.Width(175) );
}
if(target.ODODDDOO == true){
if(tvDone == false){
tv = ODCDDQQDDC.OCOQDDQQOC();
tvDone = true;
}
if(tv == false) GUI.enabled = false;
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
if(GUILayout.Button ("Update All Terrain Vegetation", GUILayout.Width(175))){

}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
GUI.enabled = true;
EditorGUILayout.Space();
if(target.ODODDQOO.Length == 0) GUI.enabled = false;
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
if(GUILayout.Button ("Save Side Object Geometry", GUILayout.Width(175))){
ODCDDQQDDC.ODQDDQDOQC(target.transform, target.OOQQQOQO);
Debug.Log("Side objects geometry saved");
}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
GUI.enabled = true;
EditorGUILayout.Space();
}


EditorGUILayout.Space();
if(target.ODODDDOO == true){
EditorGUILayout.BeginVertical("Box");
EditorGUILayout.LabelField("Active Side Objects", EditorStyles.boldLabel);
EditorGUILayout.EndVertical();
if(RoadObjectScript.ODODOQQO == null){
arr = ODCDDQQDDC.OCDOQDQCOQ(false);
RoadObjectScript.ODODOQQO = ODCDDQQDDC.OCQCOCOODC(arr);
}
if(target.ODODQQOD == null || target.ODODQQOD.Length == 0){
target.ODODQQOD = new boolean[RoadObjectScript.ODODOQQO.Length];
for(i=0;i<target.ODODQQOD.Length;i++) target.ODODQQOD[i] = true;
}
if(target.ODODQQOD.Length != RoadObjectScript.ODODQOOQ.Length){
arr = ODCDDQQDDC.OCDOQDQCOQ(false);
target.OODQOODDCO(arr, ODCDDQQDDC.OCQCOCOODC(arr), ODCDDQQDDC.ODQQOQCDOC(arr));
}
for(i=0;i<target.ODODQQOD.Length;i++){
var curState: boolean =  target.ODODQQOD[i];
EditorGUILayout.BeginHorizontal();
GUILayout.Label("      " + RoadObjectScript.ODODQOOQ[i], GUILayout.Width(175) );
target.ODODQQOD[i] = EditorGUILayout.Toggle (target.ODODQQOD[i]);
EditorGUILayout.EndHorizontal();
if(curState != target.ODODQQOD[i] ){
if(target.ODODQQOD[i]) RoadObjectEditorScript.OOCQCCDOQQ(target, i, target);
else RemoveSO(i);
}
}
if(GUI.changed){
target.OQQQQQCCDD();


}
}


EditorGUILayout.BeginVertical("Box");
EditorGUILayout.LabelField("Cam Fly Over", EditorStyles.boldLabel);
EditorGUILayout.EndVertical();

EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("  Position", ""), GUILayout.Width(75) );
var sp : float = target.splinePos;
target.splinePos = EditorGUILayout.Slider(target.splinePos, 0, 0.9999);
EditorGUILayout.EndHorizontal();
if(sp != target.splinePos){

if(target.ODQQOCODOC.flyOverPoints == null){
target.ODQQOCODOC.OCQCCOCQDD(target.transform, true);
target.ODQQOCODOC.OQDQQCDQOD();
}

target.splinePosV3 = target.ODQQOCODOC.FlyOverPos(target.splinePos);
prefPosV3 = target.ODQQOCODOC.FlyOverPos(target.splinePos - 0.01);
OODDDOQCOQ.OQCCCODDOC(target.splinePosV3, prefPosV3, target.camHeight);

}
EditorGUILayout.BeginHorizontal();
GUILayout.Label(new GUIContent("  Height", ""), GUILayout.Width(75) );
sp = target.camHeight;
target.camHeight = EditorGUILayout.Slider(target.camHeight, 1, 10);
EditorGUILayout.EndHorizontal();
if(sp != target.camHeight){

if(target.ODQQOCODOC.flyOverPoints == null){
target.ODQQOCODOC.OCQCCOCQDD(target.transform, true);
target.ODQQOCODOC.OQDQQCDQOD();
}

target.splinePosV3 = target.ODQQOCODOC.FlyOverPos(target.splinePos);
prefPosV3 = target.ODQQOCODOC.FlyOverPos(target.splinePos - 0.01);
OODDDOQCOQ.OQCCCODDOC(target.splinePosV3, prefPosV3, target.camHeight);

}

EditorGUILayout.Space();
}else if(target.OQOCDQDDOQ == 4){
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();

GUILayout.Label(target.OQQOQQODDQ);
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
EditorGUILayout.Space();
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
GUILayout.Label(" EasyRoads3D v"+target.version);
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();

GUILayout.Label(" Version Type: Full Version", GUILayout.Height(22)); 


if(GUILayout.Button ("i", GUILayout.Width(22))){
Application.OpenURL ("http://www.unityterraintools.com");
}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
EditorGUILayout.Space();
EditorGUILayout.BeginHorizontal();
GUILayout.FlexibleSpace();
if(GUILayout.Button ("Help", GUILayout.Width(225))){
Application.OpenURL ("http://www.unityterraintools.com/manual.php");
}
GUILayout.FlexibleSpace();
EditorGUILayout.EndHorizontal();
GUI.skin = origSkin;












//-->free		Application.OpenURL ("http://www.unityterraintools.com/store.php");






//-->free	//	AssetStore.Open("http://u3d.as/content/anda-soft/easy-roads3d-pro/1Ch");
//-->free		Application.OpenURL ("https://www.assetstore.unity3d.com/#/content/469");






























}else{
if(target.markers != target.OCQDOCQQOC.childCount){
target.OOCDOCOCQC();
}
EditorGUILayout.Space();

EditorGUILayout.BeginVertical("Box");
EditorGUILayout.LabelField(" General Info", EditorStyles.boldLabel);
EditorGUILayout.EndVertical();

if(RoadObjectScript.objectStrings == null){
RoadObjectScript.objectStrings = new String[3];
RoadObjectScript.objectStrings[0] = "Road Object"; RoadObjectScript.objectStrings[1]="River Object";RoadObjectScript.objectStrings[2]="Procedural Mesh Object";
}
if(target.distance == "-1"){
var ar : String[]  = target.ODQQOCODOC.OCCDQCOCDD(-1);
target.distance = ar[0];
}
EditorGUILayout.Space();
GUILayout.Label("    Object Type: " + RoadObjectScript.objectStrings[target.objectType]);
if(target.objectType == 0) GUILayout.Label("    Total Road Distance: " + target.distance.ToString() + " km");
}
EditorGUILayout.Space();
EditorGUILayout.Space();
if (GUI.tooltip != "") GUI.Label(new Rect(Input.mousePosition.x, Screen.height - Input.mousePosition.y, 200, 40), GUI.tooltip);
if (GUI.changed)
{
target.ODCQQDDCOQ = true;
}
return markerMenuDisplay;
}
function OCDDDDCCCC(fwd: Vector3, targetDir: Vector3, up: Vector3) : float {
var perp: Vector3 = Vector3.Cross(fwd, targetDir);
var dir: float = Vector3.Dot(perp, up);
if (dir > 0.0) {
return 1.0;
} else if (dir < 0.0) {
return -1.0;
} else {
return 0.0;
}
}
function OnScene(){
var cEvent : Event = Event.current;
if(target.ODCDCODQOC != -1  && Event.current.shift) target.OOCCCDOOCQ[target.ODCDCODQOC] = true;
if(target.OOCCCDOOCQ == null || target.OOCCCDOOCQ.Length == 0){
target.OOCCCDOOCQ = new boolean[5];
target.OCCCDQDOQC = new boolean[5];
}
if((cEvent.shift  && cEvent.type == EventType.mouseDown) || target.OOCCCDOOCQ[1])
{
var hit : RaycastHit;
var mPos : Vector2 = cEvent.mousePosition;
mPos.y = Screen.height - mPos.y - 40;
var ray : Ray = Camera.current.ScreenPointToRay(mPos);


if (col.Raycast (ray, hit, 3000))
{
if(target.OOCCCDOOCQ[0]){





go = target.OCQQDDDCDO(hit.point);
}
else if(target.OOCCCDOOCQ[1] && cEvent.type == EventType.mouseDown && cEvent.shift){

target.OOQQDOOOCD(hit.point, true);
}
else if(target.OOCCCDOOCQ[1]  && cEvent.shift) target.OOQQDOOOCD(hit.point, false);
else if(target.handleInsertFlag) target.handleInsertFlag = target.ODQQOCODOC.OQCQDQQQDO();

if(target.objectType == 2) ODQCOCOQQC(target);
Selection.activeGameObject = target.obj.gameObject;
}
}
if(cEvent.control && cEvent.alt && cEvent.type == EventType.mouseDown){
mPos = cEvent.mousePosition;
mPos.y = Screen.height - mPos.y - 40;
ray = Camera.current.ScreenPointToRay(mPos);
if (Physics.Raycast (Camera.current.transform.position, ray.direction, hit, 3000))
{
if(hit.collider.gameObject.GetComponent(typeof(Terrain)) != null){

var t : Terrain = hit.collider.gameObject.GetComponent(typeof(Terrain));
for(i = 0; i < ODODOQDODD.terrains.Length; i++){

if(t == ODODOQDODD.terrains[i]){
if(ODODOQDODD.terrains.Length > 1)ODODOQDODD.selectedTerrain = i + 1;
else ODODOQDODD.selectedTerrain = i;
ODODOQDODD.OQOCCCODQD();
EditorUtility.SetDirty (target);
}
}
}
}
}
if(target.OCODQODOQC != target.obj || target.obj.name != target.OOOCCCCQCC){
target.ODQQOCODOC.OQQDCQOCQQ();
target.OCODQODOQC = target.obj;
target.OOOCCCCQCC = target.obj.name;
}
if(target.OCCCCCQQQD != null){
target.ODQQOCODOC.OQCQDQQQDO();

}
if(target.transform.position != Vector3.zero) target.transform.position = Vector3.zero;
}
static function OQDQDCQDCC() : boolean{

var flag : boolean = false;
var terrains : Terrain[]  = MonoBehaviour.FindObjectsOfType(typeof(Terrain));
for(terrain in terrains) {
if(!terrain.gameObject.GetComponent(EasyRoads3DTerrainID)){
var terrainscript : EasyRoads3DTerrainID = terrain.gameObject.AddComponent("EasyRoads3DTerrainID");
var id : String = UnityEngine.Random.Range(100000000,999999999).ToString();
terrainscript.terrainid = id;
flag = true;

path = Directory.GetCurrentDirectory() + OQOCDDCOQO.backupFolder+ "/" + id;
if( !Directory.Exists(path)){
try{
Directory.CreateDirectory( path);
}
catch(e:System.Exception)
{
Debug.Log("Could not create directory: " + path + " " + e);
}
}
if(Directory.Exists(path)){


}
}
}
return flag;
}

static function ODQCOCOQQC(target){
if(ODCDDQQDDC.cullDepthMat == null)ODCDDQQDDC.cullDepthMat = AssetDatabase.LoadAssetAtPath("Assets/EasyRoads3D/Resources/Materials/cullDepthMask.mat", typeof(Material));

ODCDDQQDDC.OQDOOQQCDD(target.transform);

arr = ODCDDQQDDC.OCDOQDQCOQ(false);
target.OODDDQDCDC(arr, ODCDDQQDDC.OCQCOCOODC(arr), ODCDDQQDDC.ODQQOQCDOC(arr));
OCODCDODOC(target);
OQOQDQOCQD(target.ODQQOCODOC, target.transform, target.OQOODOQDCO(), target.OOQDOOQQ, target.OOQQQOQO, target.raise, target);


target.ODQQOCODOC.OQOOOCQCCC(target.transform, true);
target.ODODDDOO = true;
target.markerDisplayStr = "Hide Markers";
target.sosBuild = true;
}
function SetWaterScript(){
for(i = 0; i < target.ODCCODOQQD.Length; i++){
if(target.ODQQOCODOC.road.GetComponent(target.ODCCODOQQD[i]) != null && i != target.selectedWaterScript)DestroyImmediate(target.ODQQOCODOC.road.GetComponent(target.ODCCODOQQD[i]));
}
if(target.ODCCODOQQD[0] != "None Available!"  && target.ODQQOCODOC.road.GetComponent(target.ODCCODOQQD[target.selectedWaterScript]) == null){
target.ODQQOCODOC.road.AddComponent(target.ODCCODOQQD[target.selectedWaterScript]);
SetWaveHeight();

}
}
function SetWaveHeight(){
var go = GameObject.Find("Water3Manager");
if(go != null) scr = go.GetComponent("Water3Manager");
if(target.ODQQOCODOC.road.GetComponent("Water3") != null && scr != null){
scr.Instance().m_HeightDisplacement = target.waveHeight;

}
SceneView.lastActiveSceneView.Repaint();
}



static function OQOQDQOCQD(ODQQOCODOC:OQQCCCOQCQ, obj:Transform , param:List.<SideObjectParams> , OOQDOOQQ:boolean , activeODODDQQO: int[] , raise:float, target:RoadObjectScript ){
if(target.customMesh != null){
var tLayer : int = target.customMesh.layer;
target.customMesh.layer = 30;
}

var pnts:List.<OCCOOOOCOO>  = target.ODQQOCODOC.OOOQODOQQQ;
var arr = ODCDDQQDDC.OCDOQDQCOQ(false);
for(i = 0; i < activeODODDQQO.Length; i++){  
var so:ODODDQQO = arr[activeODODDQQO[i]];
var goi : GameObject = null;
if(so.OQCOCDCCQC != "") goi =  AssetDatabase.LoadAssetAtPath(AssetDatabase.GUIDToAssetPath(so.OQCOCDCCQC), typeof(GameObject));
var ODQDOQCCDQ: GameObject = null;
if(so.OQDCOQODOQ != "") ODQDOQCCDQ = AssetDatabase.LoadAssetAtPath(AssetDatabase.GUIDToAssetPath(so.OQDCOQODOQ), typeof(GameObject));
var OOOQDCCQDC : GameObject = null;
if(so.OOCCDDQQCD != "") OOOQDCCQDC =  AssetDatabase.LoadAssetAtPath(AssetDatabase.GUIDToAssetPath(so.OOCCDDQQCD), typeof(GameObject));
ODCDDQQDDC.OQCOQDCDQD(so, pnts, obj, ODQQOCODOC, param, OOQDOOQQ, activeODODDQQO[i], raise, goi, ODQDOQCCDQ, OOOQDCCQDC);
}
if(target.customMesh != null) target.customMesh.layer = tLayer;
}

static function OOCQCCDOQQ(scr, index, target){

if(scr.customMesh != null){
var tLayer : int = scr.customMesh.layer;
scr.customMesh.layer = 30;
}



for(tr  in scr.transform) {
if(tr.name == "Side Objects"){
go = tr;
}
}

var arr = ODCDDQQDDC.OCDOQDQCOQ(false);

var so : ODODDQQO = arr[index];
ODOOCDQQQC(so.name, go, so, index, target);
var goi : GameObject = null;
if(so.OQCOCDCCQC != "") goi =  AssetDatabase.LoadAssetAtPath(AssetDatabase.GUIDToAssetPath(so.OQCOCDCCQC), typeof(GameObject));
var ODQDOQCCDQ: GameObject = null;
if(so.OQDCOQODOQ != "") ODQDOQCCDQ = AssetDatabase.LoadAssetAtPath(AssetDatabase.GUIDToAssetPath(so.OQDCOQODOQ), typeof(GameObject));
var OOOQDCCQDC : GameObject = null;
if(so.OOCCDDQQCD != "") OOOQDCCQDC =  AssetDatabase.LoadAssetAtPath(AssetDatabase.GUIDToAssetPath(so.OOCCDDQQCD), typeof(GameObject));
ODCDDQQDDC.OQDCQDOCQC(scr.ODQQOCODOC, scr.transform, scr.OQOODOQDCO(), scr.OOQDOOQQ, index, scr.raise, goi, ODQDOQCCDQ, OOOQDCCQDC);
if(scr.customMesh != null) scr.customMesh.layer = tLayer;

}
function RemoveSO(index){
var arr = ODCDDQQDDC.OCDOQDQCOQ(false);
var so : ODODDQQO = arr[index];
var go = GameObject.Find("/"+target.gameObject.name+"/Side Objects/"+so.name);
if(go != null){
DestroyImmediate(go);
}
}
static function OCODCDODOC(target){

var go : GameObject =  new GameObject("Side Objects");

go.transform.parent = target.transform;
var arr = ODCDDQQDDC.OCDOQDQCOQ(false);
for(var i : int = 0; i < target.OOQQQOQO.Length; i++){  
var so : ODODDQQO = arr[target.OOQQQOQO[i]];
ODOOCDQQQC(so.name, go.transform, so, target.OOQQQOQO[i], target);
}
}
static function ODOOCDQQQC(objectname:String, obj:Transform,  so:ODODDQQO, index:int, target:RoadObjectScript){



var rootObject:Transform = null;
var mainMaterial:Material = null;
for(child1 in obj)
{
if(child1.name == objectname){
rootObject = child1;

if(so.textureGUID !=""){
var mr : MeshRenderer = rootObject.transform.GetComponent(typeof(MeshRenderer));
var mat:Material =  AssetDatabase.LoadAssetAtPath(AssetDatabase.GUIDToAssetPath(so.textureGUID), typeof(Material));
mr.material = mat;
mainMaterial = mat;
}
}
}
if(rootObject == null){
var go : GameObject =  new GameObject(objectname);
go.name = objectname;
go.transform.parent = obj;
rootObject = go.transform;

go.AddComponent(typeof(MeshFilter));
go.AddComponent(typeof(MeshRenderer));

go.AddComponent(typeof(sideObjectScript));
var scr:sideObjectScript = go.GetComponent(sideObjectScript);
if(so.textureGUID !=""){
mr = go.GetComponent(typeof(MeshRenderer));
mat =  AssetDatabase.LoadAssetAtPath(AssetDatabase.GUIDToAssetPath(so.textureGUID), typeof(Material));
mr.material = mat;
scr.mat = mat;
}
scr.soIndex = index;
scr.soName = so.name;

scr.soAlign = int.Parse(so.align);
scr.soUVx = so.uvx;
scr.soUVy = so.uvy;
scr.m_distance = so.m_distance;
scr.objectType = so.objectType;
scr.weld = so.weld;
scr.combine = so.combine;
scr.ODQCCOOOCC = so.ODQCCOOOCC;
scr.m_go = so.OQCOCDCCQC;
if(so.OQDCOQODOQ != ""){
scr.OQDCOQODOQ = so.OQDCOQODOQ;

}
if(so.OQDCOQODOQ != ""){
scr.OOCCDDQQCD = so.OOCCDDQQCD;

}
if(so.OQCOCDCCQC != ""){
scr.goInstantiated = AssetDatabase.LoadAssetAtPath(AssetDatabase.GUIDToAssetPath(so.OQCOCDCCQC), typeof(GameObject));
}
scr.selectedRotation = so.selectedRotation;
scr.position = so.position;
scr.uvInt = so.uvType;
scr.randomObjects = so.randomObjects;
scr.childOrder = so.childOrder;
scr.sidewaysOffset = so.sidewaysOffset;
scr.density = so.density;
scr.OQCQDDCCCC = target;
scr.terrainTree = so.terrainTree;
scr.xPosition = so.xPosition;
scr.yPosition = so.yPosition;
scr.uvYRound = so.uvYRound;
scr.m_collider = so.collider;
scr.m_tangents = so.tangents;

}
}

static function ODQOCOCQCC(target){
EditorUtility.DisplayProgressBar("Build EasyRoads3D Object","Initializing", 0);

scripts = FindObjectsOfType(typeof(RoadObjectScript));
var rObj : List.<Transform> = new List.<Transform>();
for(script in scripts) {
if(script.transform != target.transform) rObj.Add(script.transform);
}
if(target.ODODQOQO == null){
target.ODODQOQO = target.ODQQOCODOC.ODQOQCDCQC();
target.ODODQOQOInt = target.ODQQOCODOC.OQOQODOQQO();
}
target.OQQQODQDDQ(0.5f, true, false);


if(ODODOQDODD.selectedTerrain == null || target.ODQQOCODOC.terrain == null)ODODOQDODD.ODCOQODQQQ();
target.ODQQOCODOC.OODDDDQCCD();

ODODOQDODD.OOQDDQDCQO(target.ODQQOCODOC.terrain, Directory.GetCurrentDirectory() + OQOCDDCOQO.backupFolder + "/" + ODODOQDODD.OCCOQDQQCD(target.ODQQOCODOC.terrain) + "/"+target.ODQQOCODOC.OOOCCCCQCC+"_splatMap");


OQDOQDODQO.OODDQOQCOO(target.ODQQOCODOC.terrain, Directory.GetCurrentDirectory() + OQOCDDCOQO.backupFolder+ "/" + ODODOQDODD.OCCOQDQQCD(target.ODQQOCODOC.terrain) + "/"+target.ODQQOCODOC.OOOCCCCQCC+"_heightmap.backup");
var hitOCOOCCODQQ : List.<tPoint> = target.ODQQOCODOC.ODODOCDOOO(Vector3.zero, target.raise, target.obj, target.OOQDOOQQ, rObj, target.handleVegetation);
var changeArr : List.<Vector3> = new List.<Vector3>();
var stepsf : float = Mathf.Floor(hitOCOOCCODQQ.Count / 10);
var steps : int = Mathf.RoundToInt(stepsf);


for(i = 0; i < 10;i++){
changeArr = target.ODQQOCODOC.OODDOOOOOD(hitOCOOCCODQQ, i * steps, steps, changeArr);
EditorUtility.DisplayProgressBar("Build EasyRoads3D Object","Updating Terrain", i * 10);
}

changeArr = target.ODQQOCODOC.OODDOOOOOD(hitOCOOCCODQQ, 10 * steps, hitOCOOCCODQQ.Count - (10 * steps), changeArr);
target.ODQQOCODOC.ODOODDDCQD(changeArr, rObj);
if(target.ODQQOCODOC.handleVegetation){
target.ODQQOCODOC.OQOQQCCCDO();

path = Directory.GetCurrentDirectory() + OQOCDDCOQO.backupFolder+ "/" + ODODOQDODD.OCCOQDQQCD(target.ODQQOCODOC.terrain) + "/"+target.ODQQOCODOC.ODQOCDDDDC.OOOCCCCQCC;
OQOCDDCOQO.OQDQDDCOQQ(Directory.GetCurrentDirectory() + OQOCDDCOQO.backupFolder);
OQOCDDCOQO.OQDQDDCOQQ(Directory.GetCurrentDirectory() + OQOCDDCOQO.backupFolder+ "/" + ODODOQDODD.OCCOQDQQCD(target.ODQQOCODOC.terrain));
OQDOQDODQO.OODCOQQOQQ(target.ODQQOCODOC.OQQDCCOCQO.ToArray(), target.ODQQOCODOC.OCDQODDCQQ, path);
}

target.OOOQDQDQDC();

target.ODQQOCODOC.OCQCCOCQDD(target.transform, true);
target.ODQQOCODOC.OQDQQCDQOD();
EditorUtility.ClearProgressBar();

}
function OCOOOQDOCQ(target){
EditorUtility.DisplayProgressBar("Restore EasyRoads3D Object","Restoring terrain data", 0f);
target.OQQQODQDDQ(target.geoResolution, false, false);

if(target.ODQQOCODOC.ODCDQCOOCD != null && target.ODQQOCODOC != null){
if(target.ODQQOCODOC.editRestore && File.Exists(Directory.GetCurrentDirectory() + OQOCDDCOQO.backupFolder+ "/" + ODODOQDODD.OCCOQDQQCD(target.ODQQOCODOC.terrain) + "/"+target.ODQQOCODOC.OOOCCCCQCC+"_heightmap.backup")){
OQDOQDODQO.OOQQDOQDDO(target.ODQQOCODOC.terrain, Directory.GetCurrentDirectory() + OQOCDDCOQO.backupFolder+ "/" + ODODOQDODD.OCCOQDQQCD(target.ODQQOCODOC.terrain) + "/"+target.ODQQOCODOC.OOOCCCCQCC+"_heightmap.backup");
}else if(target.ODQQOCODOC.editRestore){
Debug.LogWarning("The original terrain heightmap data file was not found. If necessary you may restore the terrain data by using Undo or, if the terrain backup is up to date, through the EasyRoads3D Menu");
}
}

if(target.ODQQOCODOC != null){
target.ODQQOCODOC.OCQOCDCCOO();
if(target.ODQQOCODOC.handleVegetation && target.ODQQOCODOC.editRestore){
if(target.ODQQOCODOC.OQQDCCOCQO != null){
if(target.ODQQOCODOC.OQQDCCOCQO.Count == 0){
// get treeData from file
path = Directory.GetCurrentDirectory() + OQOCDDCOQO.backupFolder+ "/" + ODODOQDODD.OCCOQDQQCD(target.ODQQOCODOC.terrain) + "/"+target.ODQQOCODOC.OOOCCCCQCC;
target.ODQQOCODOC.OQQDCCOCQO = OQDOQDODQO.OCOQCDDOQD(path);
}
if(target.ODQQOCODOC.OQQDCCOCQO != null) target.ODQQOCODOC.ODDQOQQDDQ();

if(target.ODQQOCODOC.OCDQODDCQQ.Count == 0){
// get detailData from file

path = Directory.GetCurrentDirectory() + OQOCDDCOQO.backupFolder+ "/" + ODODOQDODD.OCCOQDQQCD(target.ODQQOCODOC.terrain) + "/"+target.ODQQOCODOC.OOOCCCCQCC;
target.ODQQOCODOC.OCDQODDCQQ = OQDOQDODQO.OOCQQOQDOD(path);

}
if(target.ODQQOCODOC.OCDQODDCQQ != null) target.ODQQOCODOC.OCOOCQODOO();
}
}
}
target.ODODDDOO = false;

EditorUtility.ClearProgressBar();
}
function GetExtensionPath() : String{
var extensionPath  = Path.GetDirectoryName( AssetDatabase.GetAssetPath( MonoScript.FromScriptableObject( this ) ) );

extensionPath = extensionPath.Replace("lib", "");
extensionPath = extensionPath.Replace("Editor", "");
extensionPath = extensionPath.Replace("scripts", "");

return "/" + extensionPath;
}
}
