export default function Menu() {
    return (
        <nav>
            <ul className="flex justify-between">
                <li><a href="#item1">Ínicio</a></li>
                <li><a href="#item2">Quem sou eu</a></li>
                <li>
                    <a href="#logo">
                        <img src="logo.png" alt="Logo" />
                    </a>
                </li>
                <li><a href="#item3">Habilidades</a></li>
                <li><a href="#item4">Projetos</a></li>                
            </ul>
        </nav>
    )
}