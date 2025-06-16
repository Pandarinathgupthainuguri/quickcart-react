import React, { useContext, useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarBorder from '@mui/icons-material/StarBorder';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ecomContext } from '../context/ContextProVider';
import { useParams } from 'react-router';

const Filters = ({ relatedItem, setRelatedItem }) => {
    const { allData } = useContext(ecomContext);
    const [findItemType, setFindItemType] = useState('');

    const [brandName, setBrandName] = useState([]);
    const showRatingStar = [
        { icon: '4★ & above', no: 4 },
        { icon: '3★ & above', no: 3 },
        { icon: '2★ & above', no: 2 },
        { icon: '1★ & above', no: 1 },
    ]


    const params = useParams();
    useEffect(() => {
        if (!allData.length) return;

        const findId = allData.filter(elem => elem.id == params.itemId || elem.itemType === params.itemId
            || elem.category === params.itemId || elem.gender === params.itemId
        );
        if (findId) {
            const findType = allData.filter(elem => elem.itemType === findId[0].itemType);
            setFindItemType(findType)
            const totalBrand = findType.map(elem => elem.brand)
            const uniqueArr = [...new Set(totalBrand)];
            setBrandName(uniqueArr);


        }

    }, [allData, params])



    function handleBrandCategory(brand) {
        const itemType = findItemType.map(elem => elem.itemType)
        setRelatedItem(() =>
            allData.filter(elem => elem.brand === brand && elem.itemType === itemType[0])
        )

    }
    function handleRatingCategory(rating) {
        const itemType = findItemType.map(elem => elem.itemType);
        setRelatedItem(() =>
            allData.filter(elem => Math.floor(elem.rating) === rating && elem.itemType === itemType[0])
        )

    }



    // slider
    function valuetext(value) {

        return `${value}`;
    }
    const [value, setValue] = React.useState([0, 100]);
    const [minMaxVal, setMinMaxVal] = useState([]);

    const handleChangeSlider = (event, newValue) => {
        setValue(newValue);
        // setMinMaxVal(value.map(e => e * 30));
        // setMinMaxVal(value)
    };



    // FormControl
    const [minPrice, setMinPrice] = React.useState('');
    const [maxPrice, setMaxPrice] = React.useState('');

    const handleMinFormControl = (event) => {
        setMinPrice(event.target.value);
    };
    const handleMaxFormControl = (event) => {
        setMaxPrice(event.target.value);
    };



    const [openBrand, setOpenBrand] = React.useState(false);
    const [openRating, setOpenRating] = React.useState(false);

    const handleBrandCategoryBrand = () => {
        setOpenBrand(!openBrand);
    };
    const handleBrandCategoryRating = () => {
        setOpenRating(!openRating);
    };

    // console.log(minMaxVal);


    return (
        <Paper elevation={1} className='p-2'>
            <h4 className='ps-5'>Filters</h4>

            <div>
                <Divider>
                    <Chip label="Category" size="small" />
                </Divider>
                content
            </div>


            <div>
                <Divider>
                    <Chip label="Price" size="small" />
                </Divider>
                <div className='d-flex justify-content-end'>
                    <h5 className='pointer'
                        onClick={() => {
                            const itemType = findItemType.map(elem => elem.itemType)
                            setRelatedItem(() => allData.filter(elem => elem.itemType === itemType[0]))
                        }}
                    >clear</h5>

                </div>

                <Slider
                    // getAriaLabel={() => ''}
                    value={value}
                    onChange={handleChangeSlider}
                    // valueLabelDisplay={value}
                    getAriaValueText={valuetext}
                />


                <div className='d-flex justify-content-between align-items-center'>
                    <FormControl size="small" style={{ width: '35%' }}>
                        <InputLabel id="demo-select-small-label">{value[0] == 0 ? 'Min' : minMaxVal[0]}</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={minPrice}
                            label="minPrice"
                            onChange={handleMinFormControl}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>₹1000</MenuItem>
                            <MenuItem value={20}>₹Twenty</MenuItem>
                            <MenuItem value={30}>₹Thirty</MenuItem>
                        </Select>
                    </FormControl>


                    <p>To</p>


                    <FormControl size="small" style={{ width: '35%' }}>
                        <InputLabel id="demo-select-small-label">{value[1]}</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={maxPrice}
                            label="maxPrice"
                            onChange={handleMaxFormControl}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>₹Ten</MenuItem>
                            <MenuItem value={20}>₹Twenty</MenuItem>
                            <MenuItem value={30}>₹Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <hr />
            <ListItemButton onClick={handleBrandCategoryBrand}>
                <ListItemText primary="BRAND" />
                {openBrand ? <ExpandLess style={{ color: 'black' }} /> : <ExpandMore style={{ color: 'black' }} />}
            </ListItemButton>
            <Collapse in={openBrand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {brandName.map((elem, index) =>
                        <ListItemButton sx={{ pl: 4 }} key={index} onClick={() => handleBrandCategory(elem)}>
                            <ListItemText primary={elem} />
                        </ListItemButton>
                    )}

                </List>
            </Collapse>
            <hr />
            <ListItemButton onClick={handleBrandCategoryRating}>
                <ListItemText primary="CUSTOMER RATING" />
                {openRating ? <ExpandLess style={{ color: 'black' }} /> : <ExpandMore style={{ color: 'black' }} />}
            </ListItemButton>
            <Collapse in={openRating} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        showRatingStar.map((elem, index) =>
                            <ListItemButton key={index} sx={{ pl: 4 }} onClick={() => handleRatingCategory(elem.no)}>
                                <ListItemText primary={elem.icon} />
                            </ListItemButton>
                        )
                    }

                </List>
            </Collapse>



        </Paper>
    )
}

export default Filters