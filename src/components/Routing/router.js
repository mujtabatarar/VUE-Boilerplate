import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../HelloWorld.vue";
import NewComponent from "../NewComponent.vue";
//import HomeComponent from "./components/HomeComponent.vue"
import ButtonComponent from "../ButtonComponent.vue";
import LecTen from "../LecTen.vue";
import LecEleven from "../LecEleven.vue";
import LecTwelve from "../LecTwelve.vue";
import IfCondition from "../IfCondition.vue";
import LoopList from "../LoopList.vue";
import ParentComponent from "../ParentComponent.vue";
import ParentReuse from "../ParentReuse.vue";
import HtmlBinding from "../HtmlBinding.vue";
import ClassBinding from "../ClassBinding.vue";
import PropsTwo from "../PropsTwo.vue";
import RefComponent from "../RefComponent.vue";
import SimpleForm from "../SimpleForm.vue";
import UperLevelDataPassParent from "../UperLevelDataPassParent.vue";
import CompleteForm from "../CompleteForm.vue";
import FormValidation from "../FormValidation.vue";
import FormModifier from "../FormModifier.vue";
import NonPropsDataParent from "../NonPropsDataParent.vue";
import WatcherComponent from "../WatcherComponent.vue";
import SingleSlotParent from "../SingleSlotParent.vue";
import MainPage from "../MainPage.vue";

const routes = [
  { name: "MainPage", path: "/", component: MainPage },
  {
    name: "HelloWorld",
    path: "/helloworld",
    component: HelloWorld,
  },
  {
    name: "NewComponent",
    path: "/newcomponent",
    component: NewComponent,
  },
  {
    name: "ButtonComponent",
    path: "/buttonComponent",
    component: ButtonComponent,
  },
  {
    name: "LecTen",
    path: "/lecTen",
    component: LecTen,
  },
  {
    name: "LecEleven",
    path: "/lecEleven",
    component: LecEleven,
  },
  {
    name: "LecTwelve",
    path: "/lecTwelve",
    component: LecTwelve,
  },
  {
    name: "IfCondition",
    path: "/ifCondition",
    component: IfCondition,
  },
  {
    name: "LoopList",
    path: "/loopList",
    component: LoopList,
  },
  {
    name: "ParentComponent",
    path: "/parentComponent",
    component: ParentComponent,
  },
  {
    name: "ParentReuse",
    path: "/parentReuse",
    component: ParentReuse,
  },
  {
    name: "HtmlBinding",
    path: "/htmlBinding",
    component: HtmlBinding,
  },
  {
    name: "ClassBinding",
    path: "/classBinding",
    component: ClassBinding,
  },
  {
    name: "PropsTwo",
    path: "/propsTwo",
    component: PropsTwo,
  },
  {
    name: "RefComponent",
    path: "/refComponent",
    component: RefComponent,
  },
  {
    name: "SimpleForm",
    path: "/simpleForm",
    component: SimpleForm,
  },
  {
    name: "UperLevelDataPassParent",
    path: "/uperLevelDataPassParent",
    component: UperLevelDataPassParent,
  },
  {
    name: "CompleteForm",
    path: "/completeForm",
    component: CompleteForm,
  },
  {
    name: "FormValidation",
    path: "/formValidation",
    component: FormValidation,
  },
  {
    name: "FormModifier",
    path: "/formModifier",
    component: FormModifier,
  },
  {
    name: "NonPropsDataParent",
    path: "/nonPropsDataParent",
    component: NonPropsDataParent,
  },
  {
    name: "WatcherComponent",
    path: "/watcherComponent",
    component: WatcherComponent,
  },
  {
    name: "SingleSlotParent",
    path: "/singleSlotParent",
    component: SingleSlotParent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
