import React, { Component } from 'react';
// import PropTypes from 'proptypes';
// import { withStyles, createStyleSheet } from 'materialui/styles';

import Paper from 'material-ui/Paper';
// import GridList from 'materialui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

const Style = {
    paper: { paddingTop: 80, paddingLeft: 40, display: 'flex', FlexDirection: 'row', justifyContent: 'spacebetween' }

}


class Students extends Component {
    state = {
    };



    render() {
        return (
            <div>
                <div>
                    <div style={Style.paper}>
                        <NamePaper />
                    </div>
                    <Paper className={classes.root} elevation={4}>
                        <div>
                            <Typography type="headline" component="h3">
                                {基本信息}
                            </Typography>
                            <Typography type="body1" component="p">
                                {姓名}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {电话}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {电子邮件}
                            </Typography>
                            <TextField>

                            </TextField>

                            <Typography type="body1" component="p">
                                {地区}
                            </Typography>
                            <TextField>

                            </TextField>

                            <Typography type="body1" component="p">
                                {级别}
                            </Typography>

                            <TextField>

                            </TextField>
                            <FlatButton>
                            </FlatButton>
                        </div>
                        <div>
                            <Typography type="headline" component="h3">
                                {个人信息}
                            </Typography>


                            <Typography type="body1" component="p">
                                {身份证号}
                            </Typography>
                            <TextField>

                            </TextField>

                            <Typography type="body1" component="p">
                                {学历}
                            </Typography>
                            <TextField>

                            </TextField>

                            <Typography type="body1" component="p">
                                {从业时间}
                            </Typography>
                            <TextField>

                            </TextField>

                            <Typography type="body1" component="p">
                                {累计项目总金额}
                            </Typography>
                            <TextField>

                            </TextField>

                            <Typography type="body1" component="p">
                                {累计项目软件服务金额}
                            </Typography>
                            <TextField>

                            </TextField>
                            <FlatButton>
                            </FlatButton>
                        </div>
                        <div>

                            <Typography type="headline" component="h3">
                                {项目经历}
                            </Typography>
                            <Typography type="body1" component="p">
                                {项目名称}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {项目时间}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {担任角色}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {项目总额}
                            </Typography>
                            <TextField>

                            </TextField>
                            <Typography type="body1" component="p">
                                {软件和IT服务金额}
                            </Typography>
                            <TextField>

                            </TextField>
                            <FlatButton>
                            </FlatButton>
                        </div>
                    </Paper>

                    {/*<NamePaper />*/}
                    {/*<UnarrangedPaper />*/}
                </div>
            </div>
        )
    }
}

export default Students; 