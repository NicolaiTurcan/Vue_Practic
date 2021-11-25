<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="coiryte">
                <p>© Nicolai Turcan 2021</p>
            </div>
            <nav class="footer__nav">
                <a href="https://github.com/NicolaiTurcan" target="_blank" class="icon-git icon"></a>
                <a href="https://www.facebook.com/nicolai.turcan.77" target="_blank" class="icon-facebook icon"></a>
                <a href="https://www.linkedin.com/in/nicolai-turcan-a261a0217/" target="_blank" class="icon-linkedin icon"></a>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
@import "./../assets/iconfonts.css";

.footer{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    min-height: 70px;
    color: #fff;
    background: rgba(0,0,0,0.6);
}
.wrapper{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    padding: 0 40px;
    align-items: center;
}
.coiryte p{
    margin: 0;
}
.footer__nav{
    display: flex;
}
.icon{
    display: block;
    color: #fff;
    text-decoration: none;
    margin-left: 30px;
    font-size: 30px;
    transition: 0.3s;
}
.icon:hover{
    transform: scale(1.3);
}
@media (max-width:405px){
    .wrapper{
        flex-direction: column;
    }
    .coiryte{
        margin: 15px;
    }
    .footer__nav{
        margin-bottom: 20px;
    }
    .icon{
        margin: 0 20px;
    }
}
</style>