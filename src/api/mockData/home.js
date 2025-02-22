export default {
    getTableData: () => {
        return {
            code: 200,
            data: {
                tableData: [
                    {
                        name: "Java",
                        todayBuy: 110,
                        monthBuy: 200,
                        totalBuy: 300,
                    },
                    {
                        name: "mock",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    },
                    {
                        name: "Java",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    },
                    {
                        name: "Java",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    },
                    {
                        name: "Java",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    },
                    {
                        name: "Java",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    },
                    {
                        name: "Java",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    },
                    {
                        name: "Java",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    },
                    {
                        name: "Java",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    }
                ]
            }
        }
    },
    getCountData: () => {
        return {
            code: 200,
            data: [
                {
                    name: "mock今日支付订单",
                    value: 1234,
                    icon: "SuccessFilled",
                    color: "#2ec7c9",
                },
                {
                    name: "2今日支付订单",
                    value: 1234,
                    icon: "SuccessFilled",
                    color: "#2ec7c9",
                },
                {
                    name: "3今日支付订单",
                    value: 1234,
                    icon: "SuccessFilled",
                    color: "#2ec7c9",
                },
                {
                    name: "4今日支付订单",
                    value: 1234,
                    icon: "SuccessFilled",
                    color: "#2ec7c9",
                },
                {
                    name: "5今日支付订单",
                    value: 1234,
                    icon: "SuccessFilled",
                    color: "#2ec7c9",
                },
                {
                    name: "6今日支付订单",
                    value: 1234,
                    icon: "SuccessFilled",
                    color: "#2ec7c9",
                },
            ]
        }
    },
    getChartData: () => {
        return {
            code: 200,
            data: {
                orderData: {
                    date: [
                        "2019-10-01",
                        "2019-10-02",
                        "2019-10-03",
                        "2019-10-04",
                        "2019-10-05",
                        "2019-10-06",
                        "2019-10-07",
                    ],
                    data: [
                        {
                            苹果: 1839,
                            小米: 3139,
                            华为: 3039,
                            oppo: 2839,
                            vivo: 3839,
                            一加: 5839,
                        },
                        {
                            苹果: 2839,
                            小米: 3839,
                            华为: 3839,
                            oppo: 3839,
                            vivo: 3839,
                            一加: 5839,
                        },
                        {
                            苹果: 3839,
                            小米: 3839,
                            华为: 3839,
                            oppo: 3839,
                            vivo: 3839,
                            一加: 3839,
                        },
                        {
                            苹果: 4839,
                            小米: 3839,
                            华为: 2839,
                            oppo: 3839,
                            vivo: 2839,
                            一加: 3839,
                        },
                        {
                            苹果: 1839,
                            小米: 3839,
                            华为: 6839,
                            oppo: 4839,
                            vivo: 3839,
                            一加: 1839,
                        },
                        {
                            苹果: 6839,
                            小米: 3839,
                            华为: 3839,
                            oppo: 1839,
                            vivo: 3839,
                            一加: 3839,
                        },
                        {
                            苹果: 6839,
                            小米: 4839,
                            华为: 3839,
                            oppo: 1839,
                            vivo: 2839,
                            一加: 5839,
                        },
                    ]
                },
                videoData: [
                    { name: "小米", value: 2999 },
                    { name: "苹果", value: 2999 },
                    { name: "vivo", value: 2999 },
                    { name: "oppo", value: 2999 },
                    { name: "魅族", value: 2999 },
                    { name: "三星", value: 2999 },
                ],
                userData: [
                    { data: "周一", new: 5, active: 200 },
                    { data: "周二", new: 10, active: 500 },
                    { data: "周三", new: 12, active: 550 },
                    { data: "周四", new: 60, active: 800 },
                    { data: "周五", new: 65, active: 550 },
                    { data: "周六", new: 53, active: 770 },
                    { data: "周日", new: 33, active: 170 },
                ]
            }
        }
    }
}