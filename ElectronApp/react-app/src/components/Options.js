import Button from 'react-bootstrap/Button'

function Options({ langugae, setHeading }) {
    return (
        <div>
            <Button className="option" onClick={() => { 
                setHeading(langugae) 
            }}>
                <h3>
                {langugae}
                </h3>
            </Button>
        </div>
    )
}

export default Options
