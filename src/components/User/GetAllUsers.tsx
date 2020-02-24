import React from "react";


export interface User{
    id: number
    username: string,
    first_name: string,
    last_name: string,
    email: string
}

interface GetAllUsersProps{
    items : User[],
    hasError : boolean,
    isLoading: boolean,
    axiosData : (url : string) => void
}

export class GetAllUsersComponent extends React.Component<GetAllUsersProps> 
{
    componentWillMount()
    {
        this.props.axiosData( `${process.env.REACT_APP_API_URL}/api/get_all_users/`);
    }
    // componentDidMount() {
        
    //     this.props.axiosData( `${process.env.REACT_APP_API_URL}/api/get_all_users/`);
    // }

    render() {
        if (this.props.hasError) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading ) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.items.map((item :User ) => (
                    <li key={item.id}>
                        <div>
                            <p>{item.email} </p>
                            <p>{item.first_name} </p>
                            <p>{item.last_name} </p>
                            <p>{item.username}</p>
                        </div>
                        
                    </li>
                ))}
            </ul>
        );
    }
}

