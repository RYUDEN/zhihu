/**
 * Created by liu on 17-4-12.
 */
import vue from 'vue'
export default {
        startHandler(event){
            //记录手指按下的坐标
            vue.startX = event.touches[0].pageX
            //清除偏移量
            vue.offsetX = 0
        },
        moveHandler(event){
            //兼容chrome android，阻止浏览器默认行为，修复安卓中微信内置浏览器touchmove不连续触发问题
            event.preventDefault()
            //计算手指的偏移量
            vue.offsetX = event.targetTouches[0].pageX - vue.startX
        },
        endHandler(){
            // 手指离开时触发方法

            if(vue.offsetX > 50){
                window.history.back()
            }else{
                window.history.go(0)
            }
        },
        addListener(){
            // 添加事件监听
            vue.addEventListener('touchstart', this.startHandler)
            vue.addEventListener('touchmove', this.moveHandler)
            vue.addEventListener('touchend', this.endHandler)
        }


}