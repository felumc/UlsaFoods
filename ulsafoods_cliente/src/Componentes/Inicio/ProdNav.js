import Nav from 'react-bootstrap/Nav';

function ProdNav() {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="link-1">Cafetería 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Cafetería 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3">Cafetería 3</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export { ProdNav }