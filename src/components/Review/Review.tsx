import React from 'react';
import { makeStyles, Theme, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import GradeIcon from '@material-ui/icons/Grade';
import { avatar1 } from 'assets/images/avatar';
const useStyles = makeStyles((theme: Theme) => ({}));

const Review: React.FunctionComponent = () => {
  return (
    <Box component="div" display="flex" flexDirection="column" pb={1}>
      <Box component="div" display="flex" flexDirection="row">
        <Avatar alt="hun" src={avatar1} />
        <Box component="div" ml={2}>
          <Box component="div">
            <Typography component="span" variant="button">
              신우식님
            </Typography>
            &nbsp; &middot;&nbsp;
            <Typography component="span" variant="body2">
              2019년 9월
            </Typography>
          </Box>
          <Box component="div">
            {[...new Array(5)].map((a, i) => (
              <GradeIcon fontSize="small" color="primary" />
            ))}
          </Box>
        </Box>
      </Box>
      <Typography component="div" variant="body1">
        <Box lineHeight="1.6em" mt={2} style={{ color: '#484848' }}>
          4시간 이상 오전에 대기하는 것은 힘든 일이긴 했으나, 알차게 준비해 주신
          도시락도 먹고, 주변 산책도 하고, 기다리는 동안 지루하지 않도록 다양한
          설명 해 주셔서 좋았습니다. 다시 만난 금 가이드님의 해박하고 물 흐르는
          듯한 설명 덕에 알찬 투어가 되었습니다. 다음엔 겨울시즌에 한 번
          다녀가야겠어요.
        </Box>
      </Typography>
    </Box>
  );
};

export default Review;
