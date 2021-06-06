import * as VueRouter from 'vue-router';
import Home from "@/views/Home/index";


const router = VueRouter.createRouter({
   history: VueRouter.createWebHashHistory(),
   routes:[
       {path:"/",component:Home}
   ]
})

export default router;