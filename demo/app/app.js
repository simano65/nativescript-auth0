"use strict";
var application = require("application");
if (application.ios) {
    var delegate = require("./custom-app-delegate");
    var CustomAppDelegate = delegate.CustomAppDelegate;
    application.ios.delegate = CustomAppDelegate;
    CustomAppDelegate.apply("applicationOpenURLOptions", function (event) {
        return Lock.resumeAuthOptions(event.args.url, event.args.options);
    });
    CustomAppDelegate.apply("applicationContinueUserActivityRestorationHandler", function (event) {
        return Lock.continueAuthUsing(event.userActivity);
    });
}
application.start({
    moduleName: "login"
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSx5Q0FBMkM7QUFFM0MsRUFBRSxDQUFBLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7SUFDaEIsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFFaEQsSUFBSSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUM7SUFDbkQsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFFN0MsaUJBQWlCLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLFVBQUMsS0FBSztRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsbURBQW1ELEVBQUUsVUFBQyxLQUFLO1FBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFdBQVcsQ0FBQyxLQUFLLENBQ2I7SUFDSSxVQUFVLEVBQUUsT0FBTztDQUN0QixDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1hdXRoMC90eXBpbmdzL0F1dGgwLmlvcy5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWF1dGgwL3R5cGluZ3MvTG9jay5pb3MuZC50c1wiIC8+XG5cbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5pZihhcHBsaWNhdGlvbi5pb3Mpe1xuICAgIHZhciBkZWxlZ2F0ZSA9IHJlcXVpcmUoXCIuL2N1c3RvbS1hcHAtZGVsZWdhdGVcIik7XG4gICAgXG4gICAgdmFyIEN1c3RvbUFwcERlbGVnYXRlID0gZGVsZWdhdGUuQ3VzdG9tQXBwRGVsZWdhdGU7XG4gICAgYXBwbGljYXRpb24uaW9zLmRlbGVnYXRlID0gQ3VzdG9tQXBwRGVsZWdhdGU7XG5cbiAgICBDdXN0b21BcHBEZWxlZ2F0ZS5hcHBseShcImFwcGxpY2F0aW9uT3BlblVSTE9wdGlvbnNcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBMb2NrLnJlc3VtZUF1dGhPcHRpb25zKGV2ZW50LmFyZ3MudXJsLCBldmVudC5hcmdzLm9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgQ3VzdG9tQXBwRGVsZWdhdGUuYXBwbHkoXCJhcHBsaWNhdGlvbkNvbnRpbnVlVXNlckFjdGl2aXR5UmVzdG9yYXRpb25IYW5kbGVyXCIsIChldmVudCkgPT4ge1xuICAgICAgICByZXR1cm4gTG9jay5jb250aW51ZUF1dGhVc2luZyhldmVudC51c2VyQWN0aXZpdHkpXG4gICAgfSk7XG59XG5cbmFwcGxpY2F0aW9uLnN0YXJ0KFxuICAgIHsgXG4gICAgICAgIG1vZHVsZU5hbWU6IFwibG9naW5cIiBcbiAgICB9XG4pO1xuIl19