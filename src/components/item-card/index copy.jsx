import React, {
  Suspense,
  createRef,
  useRef,
  useState,
  useEffect,
  useMemo,
} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
  useGLTF,
  useFBX,
  ContactShadows,
  Environment,
} from '@react-three/drei';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import Pizza from '../models/Pizza';
import Pizza2 from '../models/Pizza2';

// useGLTF.preload('/resources/pizza.glb');

const useStyles = makeStyles({
  root: {
    maxWidth: 260,
  },
  media: {
    height: 220,
  },
});

// function Model({ url }) {
//   const { scene } = useLoader(GLTFLoader, url);
//   return <primitive object={scene} dispose={null} />;
// }

function MeshBundle({ url }) {
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      dispose={null}
      rotation={[Math.PI * 0.1, Math.PI * 0.2, Math.PI * 0.07]}
    />
  );
}

useGLTF.preload('/resources/pizza.glb');

// const MeshBundle = ({ url }) => {
//   // const gltf = useGLTF(url);
//   // console.log(JSON.parse(JSON.stringify(gltf.scene)));

//   const gltf = useMemo(() => useGLTF(url), [url]);

//   return gltf ? (
//     <primitive
//       object={gltf.scene}
//       dispose={null}
//       rotation={[Math.PI * 0.1, Math.PI * 0.2, Math.PI * 0.07]}
//     />
//   ) : null;

//   // return (
//   //   <mesh rotation={[Math.PI * 0.1, Math.PI * 0.2, Math.PI * 0.07]}>
//   //     <primitive object={gltf.scene} />
//   //   </mesh>
//   // );
// };

// const MeshBundle = ({ obj, mtl }) => {
//   // const mesh = useRef();
//   // const mtlLoaded = useLoader(MTLLoader, mtl);
//   // const objLoaded = useLoader(OBJLoader, obj);

//   const [objLoaded, setObjLoaded] = useState();
//   const [mtlLoaded, setMtlLoaded] = useState();

//   useMemo(() => new OBJLoader().load(obj, setObjLoaded), [obj]);
//   useMemo(() => new MTLLoader().load(mtl, setMtlLoaded), [mtl]);

//   // useMemo(() => {
//   //   new OBJLoader().load(obj, setObjLoaded);
//   //   new MTLLoader().load(mtl, setMtlLoaded);
//   // }, [obj, mtl]);

//   // return objLoaded ? <primitive object={objLoaded} /> : null;

// const t = (
//   <mesh
//     materials={mtlLoaded.materials}
//     rotation={[Math.PI * 0.1, Math.PI * 0.2, Math.PI * 0.07]}
//   >
//     <primitive object={objLoaded} />
//   </mesh>
// );

//   return objLoaded && mtlLoaded ? (
//     <mesh
//       materials={mtlLoaded.materials}
//       rotation={[Math.PI * 0.1, Math.PI * 0.2, Math.PI * 0.07]}
//     >
//       <primitive object={objLoaded} />
//     </mesh>
//   ) : null;
// };

export default function ItemCard() {
  const classes = useStyles();

  // const mesh = createRef();
  // useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  // useEffect(() => {
  //   console.log(mesh);
  // });

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} title='Pizza'>
          <Canvas mode='concurrent' camera={{ fov: 60, position: [0, 0, 1] }}>
            {/* <spotLight intensity={0.8} position={[10, 20, 20]} /> */}
            {/* <ambientLight /> */}
            <spotLight intensity={2.5} position={[10, 20, 20]} />
            <spotLight intensity={0.7} position={[-10, 0, 0]} />

            <Suspense fallback={null}>
              <Pizza
                rotation={[Math.PI * 0.1, Math.PI * 0.2, Math.PI * 0.07]}
              />

              {/* <MeshBundle url='/resources/pizza.glb' /> */}

              {/* <Environment files='resources/royal_esplanade_1k.hdr' /> */}
              {/* <Environment preset='warehouse' /> */}
              {/* <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -0.5, 0]}
                opacity={0.3}
                width={10}
                height={10}
                blur={3}
                far={1}
              /> */}
            </Suspense>
          </Canvas>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Pizza
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size='small' color='primary'>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
