({
	myAction : function(component, event, helper) {
        var action = component.get("c.getExternalData");
        action.setParams({
            "extId": component.get("v.recordId")
        });
        action.setCallback(this, function(data) {
            component.set("v.myOutputs", data.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})
