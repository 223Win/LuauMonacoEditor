define(["require", "exports"], function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    exports.autocompletes = {



    

"Field":{"AutoRotate":{"label":{"name":"AutoRotate","type":"(bool)"}},"Torso":{"label":{"name":"Torso","type":"(BasePart)"}},"EvaluateStateMachine":{"label":{"name":"EvaluateStateMachine","type":"(bool)"}},"HealthDisplayType":{"label":{"name":"HealthDisplayType","type":"(HumanoidHealthDisplayType)"}},"RequiresNeck":{"label":{"name":"RequiresNeck","type":"(bool)"}},"HealthDisplayDistance":{"label":{"name":"HealthDisplayDistance","type":"(float)"}},"WalkSpeed":{"label":{"name":"WalkSpeed","type":"(float)"}},"MaxSlopeAngle":{"label":{"name":"MaxSlopeAngle","type":"(float)"}},"Jump":{"label":{"name":"Jump","type":"(bool)"}},"CameraMinDistance":{"label":{"name":"CameraMinDistance","type":"(float)"}},"WalkAngleError":{"label":{"name":"WalkAngleError","type":"(float)"}},"DisplayName":{"label":{"name":"DisplayName","type":"(string)"}},"AutomaticScalingEnabled":{"label":{"name":"AutomaticScalingEnabled","type":"(bool)"}},"Health":{"label":{"name":"Health","type":"(float)"}},"RightLeg":{"label":{"name":"RightLeg","type":"(BasePart)"}},"FloorMaterial":{"label":{"name":"FloorMaterial","type":"(Material)"}},"CollisionType":{"label":{"name":"CollisionType","type":"(HumanoidCollisionType)"}},"MaxHealth":{"label":{"name":"MaxHealth","type":"(float)"}},"LeftLeg":{"label":{"name":"LeftLeg","type":"(BasePart)"}},"WalkToPoint":{"label":{"name":"WalkToPoint","type":"(Vector3)"}},"InternalBodyScale":{"label":{"name":"InternalBodyScale","type":"(Vector3)"}},"InternalOriginalHipHeight":{"label":{"name":"InternalOriginalHipHeight","type":"(float)"}},"AutoJumpEnabled":{"label":{"name":"AutoJumpEnabled","type":"(bool)"}},"WalkToPart":{"label":{"name":"WalkToPart","type":"(BasePart)"}},"WalkDirection":{"label":{"name":"WalkDirection","type":"(Vector3)"}},"InternalHeadScale":{"label":{"name":"InternalHeadScale","type":"(float)"}},"UseJumpPower":{"label":{"name":"UseJumpPower","type":"(bool)"}},"TargetPoint":{"label":{"name":"TargetPoint","type":"(Vector3)"}},"MoveDirection":{"label":{"name":"MoveDirection","type":"(Vector3)"}},"HipHeight":{"label":{"name":"HipHeight","type":"(float)"}},"CameraMode":{"label":{"name":"CameraMode","type":"(CameraMode)"}},"BreakJointsOnDeath":{"label":{"name":"BreakJointsOnDeath","type":"(bool)"}},"CameraOffset":{"label":{"name":"CameraOffset","type":"(Vector3)"}},"SeatPart":{"label":{"name":"SeatPart","type":"(BasePart)"}},"NameDisplayDistance":{"label":{"name":"NameDisplayDistance","type":"(float)"}},"JumpReplicate":{"label":{"name":"JumpReplicate","type":"(bool)"}},"Health_XML":{"label":{"name":"Health_XML","type":"(float)"}},"RootPart":{"label":{"name":"RootPart","type":"(BasePart)"}},"RigType":{"label":{"name":"RigType","type":"(HumanoidRigType)"}},"Sit":{"label":{"name":"Sit","type":"(bool)"}},"MoveDirectionInternal":{"label":{"name":"MoveDirectionInternal","type":"(Vector3)"}},"NetworkHumanoidState":{"label":{"name":"NetworkHumanoidState","type":"(HumanoidStateType)"}},"NameOcclusion":{"label":{"name":"NameOcclusion","type":"(NameOcclusion)"}},"JumpHeight":{"label":{"name":"JumpHeight","type":"(float)"}},"CameraMaxDistance":{"label":{"name":"CameraMaxDistance","type":"(float)"}},"JumpPower":{"label":{"name":"JumpPower","type":"(float)"}},"PlatformStand":{"label":{"name":"PlatformStand","type":"(bool)"}},"DisplayDistanceType":{"label":{"name":"DisplayDistanceType","type":"(HumanoidDisplayDistanceType)"}},"InternalDisplayName":{"label":{"name":"InternalDisplayName","type":"(string)"}},"maxHealth":{"label":{"name":"maxHealth","type":"(float)"}},"Strafe":{"label":{"name":"Strafe","type":"(bool)"}}},"Event":{"Climbing":{"label":{"name":"Climbing","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/Climbing)"]}},"Ragdoll":{"label":{"name":"Ragdoll","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/Ragdoll)"]}},"EmoteTriggered":{"label":{"name":"EmoteTriggered","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/EmoteTriggered)"]}},"MoveToFinished":{"label":{"name":"MoveToFinished","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/MoveToFinished)"]}},"Died":{"label":{"name":"Died","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/Died)"]}},"CustomStatusAdded":{"label":{"name":"CustomStatusAdded","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/CustomStatusAdded)"]}},"HealthChanged":{"label":{"name":"HealthChanged","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/HealthChanged)"]}},"Jumping":{"label":{"name":"Jumping","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/Jumping)"]}},"StatusRemoved":{"label":{"name":"StatusRemoved","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/StatusRemoved)"]}},"FreeFalling":{"label":{"name":"FreeFalling","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/FreeFalling)"]}},"ClusterCompositionFinished":{"label":{"name":"ClusterCompositionFinished","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/ClusterCompositionFinished)"]}},"FallingDown":{"label":{"name":"FallingDown","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/FallingDown)"]}},"Touched":{"label":{"name":"Touched","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/Touched)"]}},"StateChanged":{"label":{"name":"StateChanged","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/StateChanged)"]}},"ServerBreakJoints":{"label":{"name":"ServerBreakJoints","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/ServerBreakJoints)"]}},"Strafing":{"label":{"name":"Strafing","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/Strafing)"]}},"StatusAdded":{"label":{"name":"StatusAdded","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/StatusAdded)"]}},"StateEnabledChanged":{"label":{"name":"StateEnabledChanged","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/StateEnabledChanged)"]}},"Swimming":{"label":{"name":"Swimming","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/Swimming)"]}},"AnimationPlayed":{"label":{"name":"AnimationPlayed","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/AnimationPlayed)"]}},"GettingUp":{"label":{"name":"GettingUp","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/GettingUp)"]}},"Running":{"label":{"name":"Running","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/Running)"]}},"PlatformStanding":{"label":{"name":"PlatformStanding","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/PlatformStanding)"]}},"Seated":{"label":{"name":"Seated","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/Seated)"]}},"ServerEquipTool":{"label":{"name":"ServerEquipTool","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/ServerEquipTool)"]}},"CustomStatusRemoved":{"label":{"name":"CustomStatusRemoved","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/CustomStatusRemoved)"]}},"ServerApplyDescription":{"label":{"name":"ServerApplyDescription","type":"(RBXScriptSignal)"},"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/ServerApplyDescription)"]}}},"Method":{"ApplyDescriptionClientServer":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/ApplyDescriptionClientServer)"]},"insertText":"ApplyDescriptionClientServer(${1:humanoidDescription}) \n\t\nend","label":{"name":"ApplyDescriptionClientServer","type":"(Function)"}},"AddAccessory":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/AddAccessory)"]},"insertText":"AddAccessory(${1:accessory}) \n\t\nend","label":{"name":"AddAccessory","type":"(Function)"}},"GetAppliedDescription":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/GetAppliedDescription)"]},"insertText":"GetAppliedDescription() \n\t\nend","label":{"name":"GetAppliedDescription","type":"(Function)"}},"TakeDamage":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/TakeDamage)"]},"insertText":"TakeDamage(${1:amount}) \n\t\nend","label":{"name":"TakeDamage","type":"(Function)"}},"RemoveStatus":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/RemoveStatus)"]},"insertText":"RemoveStatus(${1:status}) \n\t\nend","label":{"name":"RemoveStatus","type":"(Function)"}},"GetStatuses":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/GetStatuses)"]},"insertText":"GetStatuses() \n\t\nend","label":{"name":"GetStatuses","type":"(Function)"}},"GetPlayingAnimationTracks":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/GetPlayingAnimationTracks)"]},"insertText":"GetPlayingAnimationTracks() \n\t\nend","label":{"name":"GetPlayingAnimationTracks","type":"(Function)"}},"AddCustomStatus":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/AddCustomStatus)"]},"insertText":"AddCustomStatus(${1:status}) \n\t\nend","label":{"name":"AddCustomStatus","type":"(Function)"}},"HasCustomStatus":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/HasCustomStatus)"]},"insertText":"HasCustomStatus(${1:status}) \n\t\nend","label":{"name":"HasCustomStatus","type":"(Function)"}},"LoadAnimation":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/LoadAnimation)"]},"insertText":"LoadAnimation(${1:animation}) \n\t\nend","label":{"name":"LoadAnimation","type":"(Function)"}},"GetAccessories":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/GetAccessories)"]},"insertText":"GetAccessories() \n\t\nend","label":{"name":"GetAccessories","type":"(Function)"}},"SetClickToWalkEnabled":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/SetClickToWalkEnabled)"]},"insertText":"SetClickToWalkEnabled(${1:enabled}) \n\t\nend","label":{"name":"SetClickToWalkEnabled","type":"(Function)"}},"AddStatus":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/AddStatus)"]},"insertText":"AddStatus(${1:status}) \n\t\nend","label":{"name":"AddStatus","type":"(Function)"}},"ChangeState":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/ChangeState)"]},"insertText":"ChangeState(${1:state}) \n\t\nend","label":{"name":"ChangeState","type":"(Function)"}},"UnequipTools":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/UnequipTools)"]},"insertText":"UnequipTools() \n\t\nend","label":{"name":"UnequipTools","type":"(Function)"}},"GetBodyPartR15":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/GetBodyPartR15)"]},"insertText":"GetBodyPartR15(${1:part}) \n\t\nend","label":{"name":"GetBodyPartR15","type":"(Function)"}},"EquipTool":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/EquipTool)"]},"insertText":"EquipTool(${1:tool}) \n\t\nend","label":{"name":"EquipTool","type":"(Function)"}},"SetStateEnabled":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/SetStateEnabled)"]},"insertText":"SetStateEnabled(${1:state}, ${2:enabled}) \n\t\nend","label":{"name":"SetStateEnabled","type":"(Function)"}},"takeDamage":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/takeDamage)"]},"insertText":"takeDamage(${1:amount}) \n\t\nend","label":{"name":"takeDamage","type":"(Function)"}},"CacheDefaults":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/CacheDefaults)"]},"insertText":"CacheDefaults() \n\t\nend","label":{"name":"CacheDefaults","type":"(Function)"}},"PlayEmoteAndGetAnimTrackById":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/PlayEmoteAndGetAnimTrackById)"]},"insertText":"PlayEmoteAndGetAnimTrackById(${1:emoteId}) \n\t\nend","label":{"name":"PlayEmoteAndGetAnimTrackById","type":"(Function)"}},"ReplaceBodyPartR15":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/ReplaceBodyPartR15)"]},"insertText":"ReplaceBodyPartR15(${1:bodyPart}, ${2:part}) \n\t\nend","label":{"name":"ReplaceBodyPartR15","type":"(Function)"}},"PlayEmote":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/PlayEmote)"]},"insertText":"PlayEmote(${1:emoteName}) \n\t\nend","label":{"name":"PlayEmote","type":"(Function)"}},"Move":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/Move)"]},"insertText":"Move(${1:moveDirection}, ${2:relativeToCamera}) \n\t\nend","label":{"name":"Move","type":"(Function)"}},"RemoveAccessories":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/RemoveAccessories)"]},"insertText":"RemoveAccessories() \n\t\nend","label":{"name":"RemoveAccessories","type":"(Function)"}},"GetMoveVelocity":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/GetMoveVelocity)"]},"insertText":"GetMoveVelocity() \n\t\nend","label":{"name":"GetMoveVelocity","type":"(Function)"}},"ApplyDescriptionReset":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/ApplyDescriptionReset)"]},"insertText":"ApplyDescriptionReset(${1:humanoidDescription}, ${2:assetTypeVerification}) \n\t\nend","label":{"name":"ApplyDescriptionReset","type":"(Function)"}},"GetState":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/GetState)"]},"insertText":"GetState() \n\t\nend","label":{"name":"GetState","type":"(Function)"}},"MoveTo":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/MoveTo)"]},"insertText":"MoveTo(${1:location}, ${2:part}) \n\t\nend","label":{"name":"MoveTo","type":"(Function)"}},"BuildRigFromAttachments":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/BuildRigFromAttachments)"]},"insertText":"BuildRigFromAttachments() \n\t\nend","label":{"name":"BuildRigFromAttachments","type":"(Function)"}},"ApplyDescription":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/ApplyDescription)"]},"insertText":"ApplyDescription(${1:humanoidDescription}, ${2:assetTypeVerification}) \n\t\nend","label":{"name":"ApplyDescription","type":"(Function)"}},"GetLimb":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/GetLimb)"]},"insertText":"GetLimb(${1:part}) \n\t\nend","label":{"name":"GetLimb","type":"(Function)"}},"loadAnimation":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/loadAnimation)"]},"insertText":"loadAnimation(${1:animation}) \n\t\nend","label":{"name":"loadAnimation","type":"(Function)"}},"GetStateEnabled":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/GetStateEnabled)"]},"insertText":"GetStateEnabled(${1:state}) \n\t\nend","label":{"name":"GetStateEnabled","type":"(Function)"}},"GetAccessoryHandleScale":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/GetAccessoryHandleScale)"]},"insertText":"GetAccessoryHandleScale(${1:instance}, ${2:partType}) \n\t\nend","label":{"name":"GetAccessoryHandleScale","type":"(Function)"}},"HasStatus":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/HasStatus)"]},"insertText":"HasStatus(${1:status}) \n\t\nend","label":{"name":"HasStatus","type":"(Function)"}},"RemoveCustomStatus":{"documentation":{"value":["[View documentation](https://developer.roblox.com/en-us/api-reference/events/Humanoid/RemoveCustomStatus)"]},"insertText":"RemoveCustomStatus(${1:status}) \n\t\nend","label":{"name":"RemoveCustomStatus","type":"(Function)"}}},

__requires__: [['classes/Instance']],}})