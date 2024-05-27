import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';

import { Project } from '@/types/project';
import { GithubIcon, GlobeIcon } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

interface ProjectCardProps extends Project {
  className?: string;
}

function ProjectCard({
  name,
  description,
  thumbnail,
  links,
  className
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'flex flex-col justify-between overflow-hidden rounded-md',
        className
      )}
    >
      <CardContent className="inline-block w-full overflow-hidden p-0">
        <Image
          src={thumbnail || '/placeholder.svg'}
          alt={`Image of ${name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-96 w-full object-cover transition-transform duration-200 hover:scale-110"
        />
      </CardContent>
      <CardFooter className="grid grid-cols-1 items-center gap-4 p-4 md:p-6 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description || ''}
          </p>
        </div>
        <div className="flex items-center justify-end">
          <TooltipProvider>
            {links &&
              links.map((link, index) => {
                let Icon;
                switch (link.type) {
                  case 'github':
                    Icon = GithubIcon;
                    break;
                  case 'live':
                    Icon = GlobeIcon;
                    break;
                  default:
                    Icon = null;
                }

                return Icon ? (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <a
                        className={buttonVariants({
                          variant: 'outline',
                          className: 'ml-2 justify-self-end'
                        })}
                        href={link.url}
                        target="_blank"
                      >
                        <Icon />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {link.type === 'github' ? 'GitHub' : 'External'} Link
                      </p>
                    </TooltipContent>
                  </Tooltip>
                ) : null;
              })}
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
