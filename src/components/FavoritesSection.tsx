"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {
  reorderFavorites,
  removeFavorite,
} from "@/features/favorites/favoritesSlice";

export default function FavoritesSection() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    dispatch(
      reorderFavorites({
        sourceIndex: result.source.index,
        destinationIndex: result.destination.index,
      })
    );
  };

  return (
    <section className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">⭐ Favorites</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="favorites">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="space-y-3"
            >
              {favorites.map((fav, index) => (
                <Draggable key={fav.id} draggableId={fav.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-gray-100 dark:bg-gray-800 p-3 rounded flex justify-between items-center"
                    >
                      <span>
                        {fav.type.toUpperCase()} -{" "}
                        {fav.data.title || fav.data.name}
                      </span>
                      <button
                        onClick={() => dispatch(removeFavorite(fav.id))}
                        className="text-sm text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}
