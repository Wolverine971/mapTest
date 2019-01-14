import home from "../components/home"
import map from "../components/map/map"
export const routes = [
    {
      path: "/",
      component: home,
      //() => import("@/home"),
      name: "home",
          
    },
    {
      path:'/map',
      component: map,
      name: "map"
    }
]