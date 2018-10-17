import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { AppComponent } from "./app.component";
import { EntryComponent } from "./entry/entry.component";


const appRoutes: Routes = [
	{path: '', component: AppComponent } ,
	{path: 'photo', component: EntryComponent }
  
  ];

@NgModule({
	imports: [
		//RouterModule.forRoot(appRoutes, {useHash: true})
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule{

}