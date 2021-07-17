import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import IMember from '../interfaces/memberInteface';
import { ListSubheader } from '@material-ui/core';

const MemberList = (members: IMember[]) => {  
  let list_of_objects = [];
  for (var key in members) {
    var obj = members[key];    
    list_of_objects.push(obj);
}
  return(      
          <List  subheader={<li />}>
            {list_of_objects.map((sectionId : IMember) => (      

              <li key={`section-${sectionId}`} >
                <ul>
                  {
                      <ListItem key={sectionId.memberName}>
                            <ListItemIcon>
                                    <PersonIcon/>
                                  </ListItemIcon>
                      <ListItemText primary={Object.values(sectionId)[2].concat(" " + Object.values(sectionId)[3])}/>
                    </ListItem>
                  }
                </ul>
              </li>
            ))}
          </List>
  );
}

export default MemberList;
