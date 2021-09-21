export default { 
        'func' : {
            'tax' : {
            'caption': '入力したら消費税が(10%)価格を計算します',
            'function': '(...param) => { return Math.floor(param[0] * 1.1)}'
        },
        'tax2' : {
            'caption': '入力したら消費税が(8%)価格を計算します',
            'function': '(...param) => { return Math.floor(param[0] * 1.08)}'
        },
        'total': {
            'caption': '10,20,30、、、とカンマで区切った数字の合計を計算',
            'function' : `(...param)=>{
                let re = 0 
                for(let i in param ) {
                    re += param[i] * 1
                }
                return re
            }`
        },
        'factorial': {
            'caption': '10,20,30、、、とカンマで区切った数字の合計を計算',
            'function' :  `(...param)=>{
                let re = 0 
                for(let i = 0; i <= param[0]; i++) {
                    re += 1
                }
                return re
            }`
        },
    }
}