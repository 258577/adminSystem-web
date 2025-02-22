import { defineStore } from 'pinia'
import { ref } from 'vue'

function initState() {
    return {
        isCollapse: false,
        tags: [
            {
                path: "/home",
                name: "home",
                label: "首页",
                icon: "home",
            },
        ],
        currentMenu: null,
        menuList: [],
        token: "",
        routerList: []
    }
}
export const useAllDataStore = defineStore('allData', () => {
    const state = ref(initState())

    function selectMenu(val) {
        if (val.name === 'home') {
            state.value.currentMenu = null;
        } else {
            let index = state.value.tags.findIndex((item) => item.name === val.name)
            index === -1 ? state.value.tags.push(val) : ""
        }
    }
    function undateTags(tag) {
        let index = state.value.tags.findIndex(item => item.name === tag.name)
        state.value.tags.splice(index, 1)
    }
    // 登陆跳页面
    function updateMenuList(val) {
        state.value.menuList = val
    }
    function addMenu(router) {
        const menu = state.value.menuList
        const module = import.meta.glob('../views/**/*.vue')
        const routeArr = []
        menu.forEach(item => {
            if (item.children) {
                item.children.forEach((val) => {
                    let url = `../views/${val.url}.vue`
                    val.component = module[url]
                    routeArr.push(...item.children)
                })
            } else {
                let url = `../views/${item.url}.vue`
                item.component = module[url]
                routeArr.push(item)
            }
        })
        // state.value.routerList = []
        // let routers = router.getRoutes()
        // routers.forEach((item) => {
        //     if (item.name == "admin" || item.name == "login") {
        //         return
        //     } else {
        //         router.removeRoute(item.name)
        //     }
        // })

        routeArr.forEach(item => {
            state.value.routerList.push(router.addRoute("main", item))
        })
    }

    function clean() {
        state.value.routerList.forEach((item) => {
            if (item) item()
        })
        state.value = initState()
        // 删除我们本地的缓存
        localStorage.removeItem("store")
    }

    return {
        state,
        selectMenu,
        undateTags,
        updateMenuList,
        clean,
        addMenu,
    }
})