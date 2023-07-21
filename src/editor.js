const _new = ()=>{
    var path = new Path({path: '/', x: 500, y: 500});
};

const editor = () => {
    // path ->  path name
    var path = () => {
        return {
            view(vnode) {
                var node = vnode.attrs.node
                return m(".flex.flex-col.p-4.w-full", [
                    m("", [
                        m("label.block.mb-3", "Name"),
                        m("input", { 
                            value: node.path, 
                            onchange: (e) => node.setPath(e.target.value) 
                        })
                    ]),
                ])
            }
        }
    };

    var variable = () => {
        return {
            view(vnode) {
                var node = vnode.attrs.node;
                const styles = ["template","plain", "query"];
                return m(".flex.flex-col.p-4.w-full", [
                    m("", [
                        m("label.block.mb-3", "Name"),
                        m("input", { 
                            value: node.name, 
                            onchange: (e) => node.setName(e.target.value) 
                        })
                    ]),
                    m("", [
                        m("label.block.mb-3", "style"),
                        m("select",
                            {
                            onchange: (e) => {
                                node.setStyle(e.target.value);
                            }
                            },
                            styles.map((style, idx) =>
                            m("option", {
                                key: idx,
                                value: style,
                                selected: node.style == style,
                            }, style))
                        ),
                        ]),
                ])
            }
        }
    };

    var resource = () => {
        return {
            view(vnode) {
                var node = vnode.attrs.node
                return m(".flex.flex-col.p-4.w-full", [
                    m("", [
                        m("label.block.mb-3", "Name"),
                        m("input", { 
                            value: node.name, 
                            onchange: (e) => node.setName(e.target.value) 
                        })
                    ]),
                ])
            }
        }
    };
 
    var config = {
        view(vnode) {
        const node = vnode.attrs.config;
        return m(".fixed.border.border-1.right-0.top-0.bottom-0.bg-white.flex.flex-col",
            { style: "min-width:25%; box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px;}" }, [
            m(".flex.justify-between.border-b.px-4.py-2",
            m("label.text-2xl.font-medium", "Config"),
            m("button", {
                onclick: () => {
                    Events.config.node = null;
                }
            }, [
                m("svg[xmlns='http://www.w3.org/2000/svg'][width='24'][height='24'][viewBox='0 0 24 24'][fill='none'][stroke='currentColor'][stroke-width='2'][stroke-linecap='round'][stroke-linejoin='round'][color='currentColor']",
                { class: "text-gray-400 hover:text-gray-600 active:text-gray-800" },
                [
                    m("line[x1='18'][y1='6'][x2='6'][y2='18']"),
                    m("line[x1='6'][y1='6'][x2='18'][y2='18']")
                ]
                )
            ])),
            m(".flex-1.flex.justify-center.flex-col", [
            m("", [
                m(".flex.items-center.justify-between.mx-6.m-2", [
                m("label.text-xl.font-medium", node.type),
                m("button.btn.rounded-xl.w-fit.self-end", {
                    onclick: () => {
                        node.actions.remove(node);
                        Events.config.node = null;
                    }
                }, 
                    m("svg[xmlns='http://www.w3.org/2000/svg'][width='24'][height='24'][viewBox='0 0 24 24'][fill='none'][stroke='currentColor'][stroke-width='2'][stroke-linecap='round'][stroke-linejoin='round'][color='currentColor']",
                        { class: "text-red-300 hover:text-red-500 active:text-red-600 focus:test-red-400" }, 
                        [
                            m("path[d='M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z']"),
                            m("line[x1='18'][y1='9'][x2='12'][y2='15']"),
                            m("line[x1='12'][y1='9'][x2='18'][y2='15']")
                        ]
                    )
                ),
                ]), 
                m("hr.mx-6.border-black.border-1")]),
                [
                    node.type == "path" && m(path, { node }),
                    node.type == "variable" && m(variable, { node }),
                    node.type == "resource" && m(resource, { node }),
                ]
            ])
        ])
        }
    };
    return {
        oncreate(vnode) {
            vnode.dom.append(aya.svg);
        },
        view: (vnode) => {
            return m("#viewport",{
            onclick(){}
            }, [
                Events.config.node && m(config, { config: Events.config.node})
            ])
        }
    }
}