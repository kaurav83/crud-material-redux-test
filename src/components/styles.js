import { makeStyles } from "@material-ui/core";

export const usersStyles = makeStyles((theme) => ({
    box: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "42vh"
    },
    boxPaginator: {
        marginTop: "auto",
    },
    paginator: {
        justifyContent: "center",
        padding: "10px",
        
    },
    spinner: {
        position: "absolute",
        top: "60%",
        left: "50%"
    }
}));

export  const userItemStyles = makeStyles((theme) => ({
    item: {
      margin: "8px 0",
      backgroundColor: "#c5e1a5",
      color: "#222",
      flexDirection: "column"
    },
    firstRow:  {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        fontWeight: "bolt"
    },
    secondRow: {
        alignSelf: "flex-start",
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    textarea: {
        width: "100%",
        marginRight: "5px",
        marginBottom: "12px"
    },
    form: {
        display: "flex",
        justifyContent: "space-between",
        position: "relative"
    },
    button: {
        backgroundColor: "transparent",
        padding: "0",
        border: "none",
        alignSelf: "flex-start"
    }
}));

export  const createUserStyles = makeStyles((theme) => ({
    boxCreateUser: {
      margin: "10px 0",
      backgroundColor: "#3f51b5",
      padding: "5px 5px 10px 5px",
      color: "#fff"
    },
    boxFields: {
        backgroundColor: "#fff",
        borderRadius: "5px",
        padding: "5px 5px 15px 5px",
        position: "relative"
    },
    errorText: {
        position: "absolute",
        color: "tomato",
        bottom: "0",
        left: "5px"
    },
    fields: {
        marginTop: "10px",
        padding: "0 5px",
        width: "100%"
    },
    textArea: {
        marginTop: "10px",
        height: "80px",
        padding: "0 5px",
        width: "100%"
    },
    button: {
        marginLeft: "auto",
        marginTop: "10px",
        backgroundColor: "#4caf50",
        color: "#fff",
        display: "block",
        textAlign: "right",
        textTransform: "capitalize"
    }
}));