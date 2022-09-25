import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import ImageCarousel from './ImageCarousel';

const Imagelist = (props) => {
    const [open, setOpen] = useState(false);
    const [currImage, setCurrImage] = useState("...");

    return (
        <>
            <ImageList>
                {
                    props.itemData.map((item) => (
                        <ImageListItem key={item}>
                            <img
                                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="image not loaded"
                                loading="lazy"
                                onClick={() => {
                                        setOpen(true);
                                        setCurrImage(item);
                                    }
                                }
                            />
                        </ImageListItem>
                    ))
                }
            </ImageList >

    {/* //modal------------------ */}
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose
                        variant="outlined"
                        sx={{
                            top: 'calc(-1/4 * var(--IconButton-size))',
                            right: 'calc(-1/4 * var(--IconButton-size))',
                            boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                            borderRadius: '50%',
                            bgcolor: 'background.body',
                        }}
                    />
                    <img src={currImage} style={{'width': '100%'}} alt="loading image..."/>
                </Sheet>
            </Modal>
        </>
    );
}

export default Imagelist