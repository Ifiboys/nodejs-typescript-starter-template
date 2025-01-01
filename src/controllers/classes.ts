import { db } from "@/db/db";
import {
  ClassCreateProps,
  StreamCreateProps,
  TypedRequestBody,
} from "@/types/types";
import { generateSlug } from "@/utils/generateSlug";
import { Request, Response } from "express";

export async function createClass(
  req: TypedRequestBody<ClassCreateProps>,
  res: Response
) {
  const data = req.body;
  const slug = generateSlug(data.title);
  data.slug = slug;
  try {
    // Check if the school already exists\
    const existingClass = await db.class.findUnique({
      where: {
        slug,
      },
    });

    if (existingClass) {
      return res.status(409).json({
        data: null,
        error: "Cette Classe existe déjà",
      });
    }
    const newClass = await db.class.create({
      data,
    });
    console.log(`Classe creer avec succès: ${newClass.title} (${newClass.id})`);
    return res.status(201).json({
      data: newClass,
      error: null,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      error: "Quelques chose c'est mal passer",
    });
  }
}

export async function createStream(
  req: TypedRequestBody<StreamCreateProps>,
  res: Response
) {
  const data = req.body;
  const slug = generateSlug(data.title);
  data.slug = slug;
  try {
    // Check if the stream already exists\
    const existingStream = await db.stream.findUnique({
      where: {
        slug,
      },
    });

    if (existingStream) {
      return res.status(409).json({
        data: null,
        error: "Cette filière existe déjà",
      });
    }
    const newStream = await db.stream.create({
      data,
    });
    console.log(
      `Filière creer avec succès: ${newStream.title} (${newStream.id})`
    );
    return res.status(201).json({
      data: newStream,
      error: null,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: null,
      error: "Quelques chose c'est mal passer",
    });
  }
}
export async function getClasses(req: Request, res: Response) {
  try {
    const classes = await db.class.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        streams: {
          include: {
            _count: {
              select: {
                students: true,
              },
            },
          },
        },
        _count: {
          select: {
            students: true,
          },
        },
      },
    });
    return res.status(200).json(classes);
  } catch (error) {
    console.log(error);
  }
}
export async function getStreams(req: Request, res: Response) {
  try {
    const streams = await db.stream.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(streams);
  } catch (error) {
    console.log(error);
  }
}
// export async function getCustomerById(req: Request, res: Response) {
//   const { id } = req.params;
//   try {
//     const customer = await db.customer.findUnique({
//       where: {
//         id,
//       },
//     });
//     return res.status(200).json(customer);
//   } catch (error) {
//     console.log(error);
//   }
// }
