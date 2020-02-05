import * as React from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { UserBasketItem } from "../types/BookCatalogState";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

interface UserBasketProps{
    UserBooks: UserBasketItem []
}

//const UserBooks = useContext<UserBasketProps>(rootReducer.);
export default function UserBasketComponent({UserBooks}: any)
{
    const classes = useStyles();
    console.log(UserBooks.UserReservedBooks)
    return(
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Your Books</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography component={'span'} >
                        <ul>
                          {UserBooks.UserReservedBooks.map((book : UserBasketItem) => 
                              <div>
                                  <div >
                                      <span>title:   {book.book.title}</span>
                                  </div>  
                                  <div >
                                      <span>amount:   {book.amount}</span>
                                  </div> 
                              </div>
                          )}
                        </ul>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
    )
}