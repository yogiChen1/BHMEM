const routers = {
    "msg": "操作成功",
    "code": 200,
    "data": [
        {
            "name": "System",
            "path": "/system",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "系统管理",
                "icon": "system",
                "noCache": false,
                "link": null
            },
            "children": [
                {
                    "name": "User",
                    "path": "user",
                    "hidden": false,
                    "component": "system/user/index",
                    "meta": {
                        "title": "用户管理",
                        "icon": "user",
                        "noCache": false,
                        "link": null
                    }
                },
                {
                    "name": "Role",
                    "path": "role",
                    "hidden": false,
                    "component": "system/role/index",
                    "meta": {
                        "title": "角色管理",
                        "icon": "peoples",
                        "noCache": false,
                        "link": null
                    }
                },
                {
                    "name": "Menu",
                    "path": "menu",
                    "hidden": false,
                    "component": "system/menu/index",
                    "meta": {
                        "title": "菜单管理",
                        "icon": "tree-table",
                        "noCache": false,
                        "link": null
                    }
                },
                {
                    "name": "Dept",
                    "path": "dept",
                    "hidden": false,
                    "component": "system/dept/index",
                    "meta": {
                        "title": "组织管理",
                        "icon": "tree",
                        "noCache": false,
                        "link": null
                    }
                },
                {
                    "name": "Post",
                    "path": "post",
                    "hidden": false,
                    "component": "system/post/index",
                    "meta": {
                        "title": "职位管理",
                        "icon": "post",
                        "noCache": false,
                        "link": null
                    }
                },
                {
                    "name": "Dict",
                    "path": "dict",
                    "hidden": false,
                    "component": "system/dict/index",
                    "meta": {
                        "title": "字典管理",
                        "icon": "dict",
                        "noCache": false,
                        "link": null
                    }
                },
                {
                    "name": "Config",
                    "path": "config",
                    "hidden": false,
                    "component": "system/config/index",
                    "meta": {
                        "title": "参数设置",
                        "icon": "edit",
                        "noCache": false,
                        "link": null
                    }
                },
                {
                    "name": "Notice",
                    "path": "notice",
                    "hidden": false,
                    "component": "system/notice/index",
                    "meta": {
                        "title": "通知公告",
                        "icon": "message",
                        "noCache": false,
                        "link": null
                    }
                },
                {
                    "name": "Log",
                    "path": "log",
                    "hidden": false,
                    "redirect": "noRedirect",
                    "component": "ParentView",
                    "alwaysShow": true,
                    "meta": {
                        "title": "日志管理",
                        "icon": "log",
                        "noCache": false,
                        "link": null
                    },
                    "children": [
                        {
                            "name": "Operlog",
                            "path": "operlog",
                            "hidden": false,
                            "component": "monitor/operlog/index",
                            "meta": {
                                "title": "操作日志",
                                "icon": "form",
                                "noCache": false,
                                "link": null
                            }
                        },
                        {
                            "name": "Logininfor",
                            "path": "logininfor",
                            "hidden": false,
                            "component": "monitor/logininfor/index",
                            "meta": {
                                "title": "登录日志",
                                "icon": "logininfor",
                                "noCache": false,
                                "link": null
                            }
                        }
                    ]
                }
            ]
        },
        // {
        //     "name": "Monitor",
        //     "path": "/monitor",
        //     "hidden": false,
        //     "redirect": "noRedirect",
        //     "component": "Layout",
        //     "alwaysShow": true,
        //     "meta": {
        //         "title": "系统监控",
        //         "icon": "monitor",
        //         "noCache": false,
        //         "link": null
        //     },
        //     "children": [
        //         {
        //             "name": "Online",
        //             "path": "online",
        //             "hidden": false,
        //             "component": "monitor/online/index",
        //             "meta": {
        //                 "title": "在线用户",
        //                 "icon": "online",
        //                 "noCache": false,
        //                 "link": null
        //             }
        //         },
        //         {
        //             "name": "Job",
        //             "path": "job",
        //             "hidden": false,
        //             "component": "monitor/job/index",
        //             "meta": {
        //                 "title": "定时任务",
        //                 "icon": "job",
        //                 "noCache": false,
        //                 "link": null
        //             }
        //         },
        //         {
        //             "name": "Druid",
        //             "path": "druid",
        //             "hidden": false,
        //             "component": "monitor/druid/index",
        //             "meta": {
        //                 "title": "数据监控",
        //                 "icon": "druid",
        //                 "noCache": false,
        //                 "link": null
        //             }
        //         },
        //         {
        //             "name": "Server",
        //             "path": "server",
        //             "hidden": false,
        //             "component": "monitor/server/index",
        //             "meta": {
        //                 "title": "服务监控",
        //                 "icon": "server",
        //                 "noCache": false,
        //                 "link": null
        //             }
        //         },
        //         {
        //             "name": "Cache",
        //             "path": "cache",
        //             "hidden": false,
        //             "component": "monitor/cache/index",
        //             "meta": {
        //                 "title": "缓存监控",
        //                 "icon": "redis",
        //                 "noCache": false,
        //                 "link": null
        //             }
        //         },
        //         {
        //             "name": "CacheList",
        //             "path": "cacheList",
        //             "hidden": false,
        //             "component": "monitor/cache/list",
        //             "meta": {
        //                 "title": "缓存列表",
        //                 "icon": "redis-list",
        //                 "noCache": false,
        //                 "link": null
        //             }
        //         }
        //     ]
        // },
        // {
        //     "name": "Tool",
        //     "path": "/tool",
        //     "hidden": false,
        //     "redirect": "noRedirect",
        //     "component": "Layout",
        //     "alwaysShow": true,
        //     "meta": {
        //         "title": "系统工具",
        //         "icon": "tool",
        //         "noCache": false,
        //         "link": null
        //     },
        //     "children": [
        //         {
        //             "name": "Build",
        //             "path": "build",
        //             "hidden": false,
        //             "component": "tool/build/index",
        //             "meta": {
        //                 "title": "表单构建",
        //                 "icon": "build",
        //                 "noCache": false,
        //                 "link": null
        //             }
        //         },
        //         {
        //             "name": "Gen",
        //             "path": "gen",
        //             "hidden": false,
        //             "component": "tool/gen/index",
        //             "meta": {
        //                 "title": "代码生成",
        //                 "icon": "code",
        //                 "noCache": false,
        //                 "link": null
        //             }
        //         },
        //         {
        //             "name": "Swagger",
        //             "path": "swagger",
        //             "hidden": false,
        //             "component": "tool/swagger/index",
        //             "meta": {
        //                 "title": "系统接口",
        //                 "icon": "swagger",
        //                 "noCache": false,
        //                 "link": null
        //             }
        //         }
        //     ]
        // },
        {
            "name": "Edu",
            "path": "/bhMem",
            "hidden": false,
            "redirect": "noRedirect",
            "component": "Layout",
            "alwaysShow": true,
            "meta": {
                "title": "课程计划管理",
                "icon": "education",
                "noCache": false,
                "link": null
            },
            "children": [
                {
                    "name": "Plan",
                    "path": "plan",
                    "hidden": false,
                    "component": "ParentView",
                    "meta": {
                        "title": "计划管理",
                        "icon": "education",
                        "noCache": false,
                        "link": null
                    }
                },
                {
                    "name": "Course",
                    "path": "course",
                    "hidden": false,
                    "component": "ParentView",
                    "meta": {
                        "title": "课程管理",
                        "icon": "education",
                        "noCache": false,
                        "link": null
                    }
                },
                {
                    "name": "Course/select",
                    "path": "course/select",
                    "hidden": false,
                    "component": "ParentView",
                    "meta": {
                        "title": "学生选课",
                        "icon": "education",
                        "noCache": false,
                        "link": null
                    }
                },
                {
                    "name": "Apply",
                    "path": "apply",
                    "hidden": false,
                    "component": "ParentView",
                    "meta": {
                        "title": "实践记录申请",
                        "icon": "education",
                        "noCache": false,
                        "link": null
                    }
                },
                {
                    "name": "Approval",
                    "path": "approval",
                    "hidden": false,
                    "component": "ParentView",
                    "meta": {
                        "title": "实践记录审批",
                        "icon": "education",
                        "noCache": false,
                        "link": null
                    }
                },
                {
                    "name": "Score",
                    "path": "score",
                    "hidden": false,
                    "component": "ParentView",
                    "meta": {
                        "title": "学分汇总记录",
                        "icon": "education",
                        "noCache": false,
                        "link": null
                    }
                }
            ]
        }
    ]
}

export default routers;
