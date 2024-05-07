import React from 'react';
import { Wrapper, Title, Logo, Name, SelectionPanel, Achievements, ListWrapper, List,  ListItem, SubList, SubListItem} from './styles.js';
import recommendationsLogo from '../../images/recommendationsLogo.png';
import lockIcon from '../../images/lockIcon.png';
import branch from '../../images/branch.png';


function Recommendations() {

    return (
        <Wrapper>
            <Title>
                <Logo src={recommendationsLogo}></Logo>
                <Name><span style={{color: '#D1FD0A'}}>Recommendations</span> from AI</Name>
            </Title>  
            <SelectionPanel>
                <p>Base</p>
                <p>Advanced</p>
                <img src={lockIcon} alt="" />
            </SelectionPanel>
            <Achievements>
                <div> <p>😥 you </p> followed <span style={{color: '#D1FD0A', margin: '0 4px'}}>2/10</span> recommendations</div>
            </Achievements>
            <ListWrapper>
                <List>
                    <ListItem>
                        <div>
                            <span></span>
                        </div>
                        <p>02:15 Recommendations for your song</p>
                    </ListItem>
                    <ListItem>
                        <div>
                            <span style={{height: '2px'}}></span>
                        </div>
                        <p>Duration for segments of your sound promo</p>
                    </ListItem>
                    <SubList>
                        <SubListItem>
                            <img src={branch} alt="" />
                            <div>
                                <span style={{display: 'none'}}></span>
                            </div>
                            <p>Duration for segments of your sound promo</p>
                        </SubListItem>
                        <SubListItem>
                            <img src={branch} alt="" />
                            <div>
                                <span></span>
                            </div>
                            <p>Duration for segments of your sound promo</p>
                        </SubListItem>
                    </SubList>
                    <ListItem style={{backgroundColor: 'rgba(33, 33, 36, 1)'}}>
                        <div>
                            <span style={{display: 'none'}}></span>
                        </div>
                        <p>Release day</p>
                        <img src={lockIcon} alt="" />
                        <p style={{color: '#D1FD0A'}}>Coming Soon</p>
                    </ListItem>
                    <ListItem>
                        <div>
                            <span></span>
                        </div>
                        <p>Promotion</p>
                    </ListItem>
                    <ListItem style={{backgroundColor: 'rgba(33, 33, 36, 1)'}}>
                        <div>
                            <span style={{display: 'none'}}></span>
                        </div>
                        <p>Duet</p>
                        <img src={lockIcon} alt="" />
                        <p style={{color: '#D1FD0A'}}>Coming Soon</p>
                    </ListItem>
                    <ListItem style={{backgroundColor: 'rgba(33, 33, 36, 1)'}}>
                        <div>
                            <span style={{display: 'none'}}></span>
                        </div>
                        <p>The best location for the potential of your sound</p>
                        <img src={lockIcon} alt="" />
                        <p style={{color: '#D1FD0A'}}>Coming Soon</p>
                    </ListItem>
                </List>
            </ListWrapper>
        </Wrapper>
    );
}

export default Recommendations;