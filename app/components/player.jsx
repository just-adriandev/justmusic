'use client';
import { TypeAnimation } from 'react-type-animation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
export default function PlayerJM() {
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=jfKfPfyJRdk');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <main>
        <div className='md:mt-10 mt-32'>
            <Card className='mb-10 ml-4 w-[80%] md:w-[50%] lg:w-[40%] bg-black flex'>
            <div className='mt-1 flex-col p-2'>
            
            <CardHeader>
            <CardTitle className='text-primary text-4xl font-semibold'>Apenas
              <span className=' ml-2'>
              <TypeAnimation
                  sequence={[
                    
                    'Música',
                    1000,
                    'Relaxe',
                    1000,
                    'Aproveite',
                    1000,
                    'Respire',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </CardTitle>
            <CardDescription className='text-primary-foreground'>Cole a URL de um video qualquer para poder aproveitar sem distrações e sem ocupar processamento desnecessário. É só inserir, não precisa fazer mais nada. &#128564; </CardDescription>
            
              <div>
                <Input
                  type="text"
                  value={url}
                  onChange={handleUrlChange}
                  placeholder="Insira a URL do video aqui"
                  className='mt-3 text-primary bg-slate'
                />
              </div>
            </CardHeader>
          
            <CardContent className='rounded-md'>
              <ReactPlayer className='rounded-md' url={url} controls height={200} width={400} />
            </CardContent>

            </div>
          </Card>

          <Card>
            <CardHeader>
            <CardTitle className='text-primary text-4xl font-semibold'>Apenas
              Urls sugeridas:
            </CardTitle>
            <CardContent>
              <ul className='text-primary-foreground'>
                <li className='text-2xl font-semibold'>https://www.youtube.com/watch?v=</li>
                <li className='text-2xl font-semibold'>https://youtu.be/</li>
                <li className='text-2xl font-semibold'>https://youtu.be/</li>
                <li className='text-2xl font-semibold'>https://youtu.be/</li>
              </ul>
            </CardContent>
            </CardHeader>
          </Card>
        </div>
    </main>
  );
}