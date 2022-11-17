import innerTabs from "@topics/routes/inner-tabs";
import { currentTopicName } from "@topics/configs/topic-names";
import { base } from "@topics/configs/get-router-base";
import initRouter from "@common-routes";
import beforeEach from "@topics-routes/middlewares/before-each";
import afterEach from "@topics-routes/middlewares/after-each";
const children = innerTabs[currentTopicName];

const routes = ({ indexRedirect = null } = {}) => [
  {
    path: "/home",
    alias: "/",
    name: "home",
    component: () => import("@topics-views/home"),
  },
  {
    path: "/index",
    name: "index",
    redirect: indexRedirect ? indexRedirect() : { name: "event-info" },
    component: () => import("@topics-views/inner-tabs/event-index"),
    children,
  },
];

const Router = initRouter({
  mode: "history",
  base,
  routes: routes(),
  beforeEach,
  afterEach,
});

export default Router;
